export const onRequest: PagesFunction = async (context) => {
    const urlParams = new URL(context.request.url).searchParams;
    const targetUrl = urlParams.get('url');

    if (!targetUrl) {
        return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    let normalizedTargetUrl = targetUrl.trim();
    if (!/^https?:\/\//i.test(normalizedTargetUrl)) {
        normalizedTargetUrl = `https://${normalizedTargetUrl}`;
    }

    try {
        const parsedUrl = new URL(normalizedTargetUrl);

        // Basic security: block non-http(s)
        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
            return new Response(JSON.stringify({ image: null, error: 'Invalid protocol' }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Basic security: block private IP ranges (simplified for Cloudflare env)
        const hostname = parsedUrl.hostname.toLowerCase();
        if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.') || hostname.startsWith('10.')) {
            return new Response(JSON.stringify({ image: null, error: 'Invalid hostname' }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const response = await fetch(normalizedTargetUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LizHolisticCoachingPreview/1.0)' },
            signal: AbortSignal.timeout(5000), // 5s timeout
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ image: null, error: 'Failed to fetch target URL' }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Limit fetch size to avoid OOM
        const text = await response.text();
        const limitedText = text.substring(0, 100000); // First 100KB

        const metadata: any = {
            image: null,
            title: null,
            description: null,
        };

        // Simple regex extraction for OG tags (avoiding heavy external libraries)
        const ogImageMatch = limitedText.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i) ||
            limitedText.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/i);
        const ogTitleMatch = limitedText.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i) ||
            limitedText.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:title"/i) ||
            limitedText.match(/<title>([^<]+)<\/title>/i);
        const ogDescMatch = limitedText.match(/<meta[^>]+property="og:description"[^>]+content="([^"]+)"/i) ||
            limitedText.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:description"/i) ||
            limitedText.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i);

        if (ogImageMatch) metadata.image = ogImageMatch[1];
        if (ogTitleMatch) metadata.title = ogTitleMatch[1];
        if (ogDescMatch) metadata.description = ogDescMatch[1];

        return new Response(JSON.stringify(metadata), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=3600', // 1 hour cache
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ image: null, error: 'Internal error: ' + error.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
