export const onRequest: PagesFunction = async (context) => {
    const urlParams = new URL(context.request.url).searchParams;
    const noCache = urlParams.get('nocache') === '1';

    const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1Oak2NzID_q4jN-eWgYYZghLOPTL_gz62bRsDGWznwMw/gviz/tq?tqx=out:csv&sheet=events';

    try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL, {
            cf: noCache ? { cacheTtl: 0, cacheEverything: false } : {
                cacheTtl: 60,
                cacheEverything: true,
            },
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Failed to fetch spreadsheet' }), {
                status: 502,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const csvText = await response.text();

        // CSV Parser that handles quoted strings
        const parseCSVLine = (line: string) => {
            const result = [];
            let current = '';
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') inQuotes = !inQuotes;
                else if (char === ',' && !inQuotes) {
                    result.push(current.trim());
                    current = '';
                } else current += char;
            }
            result.push(current.trim());
            return result;
        };

        const lines = csvText.split('\n').filter(line => line.trim() !== '');
        if (lines.length < 2) {
            return new Response(JSON.stringify([]), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().replace(/^"|"$/g, ''));
        const data = lines.slice(1).map(line => {
            const values = parseCSVLine(line);
            const entry: any = {};
            headers.forEach((header, i) => {
                let val = values[i] || '';
                // Remove surrounding quotes from values
                if (val.startsWith('"') && val.endsWith('"')) {
                    val = val.substring(1, val.length - 1).replace(/""/g, '"');
                }
                entry[header] = val;
            });
            return entry;
        }).filter(e => e.title && e.description && e.link);

        const headers_out: any = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };

        if (noCache) {
            headers_out['Cache-Control'] = 'no-store';
        } else {
            // Logic per request: "public, max-age=60, s-maxage=60, stale-while-revalidate=300"
            headers_out['Cache-Control'] = 'public, max-age=60, s-maxage=60, stale-while-revalidate=300';
        }

        return new Response(JSON.stringify(data), { headers: headers_out });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal error: ' + error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
