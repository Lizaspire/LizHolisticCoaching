import React, { useEffect, useState } from 'react';
import { Button } from './Button';

interface EventData {
    title: string;
    description: string;
    link: string;
    date?: string;
    image_url?: string;
    preview_image?: string | null;
}

interface EventsPageProps {
    onBack: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onBack }) => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                if (!response.ok) throw new Error('Failed to fetch events');
                const data: EventData[] = await response.json();

                // Sorting Logic
                const sortedData = [...data].sort((a, b) => {
                    const dateA = a.date && /^\d{4}-\d{2}-\d{2}$/.test(a.date) ? a.date : null;
                    const dateB = b.date && /^\d{4}-\d{2}-\d{2}$/.test(b.date) ? b.date : null;

                    if (dateA && dateB) return dateA.localeCompare(dateB);
                    return 0; // Maintain sheet order if not both YYYY-MM-DD
                });

                // Parallel Link Previews
                const dataWithPreviews = await Promise.all(sortedData.map(async (event) => {
                    if (!event.image_url && event.link) {
                        try {
                            const previewRes = await fetch(`/api/link-preview?url=${encodeURIComponent(event.link)}`);
                            if (previewRes.ok) {
                                const meta = await previewRes.json();
                                return { ...event, preview_image: meta.image };
                            }
                        } catch (e) {
                            console.warn('Preview failed for', event.link);
                        }
                    }
                    return { ...event, preview_image: null };
                }));

                setEvents(dataWithPreviews);
            } catch (err) {
                setError('Error loading events.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const formatDate = (dateStr: string) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            // Avoid timezone off-by-one by specifying local time start of day
            const date = new Date(`${dateStr}T00:00:00`);
            return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
        }
        return dateStr;
    };

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-16 lg:pt-32 lg:pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 font-serif leading-tight">Events & Updates</h1>
                        <p className="mt-4 text-lg text-stone-600">The latest from Liz Holisic Coaching.</p>
                    </div>
                    <button onClick={onBack} className="text-sage-700 font-medium hover:text-sage-800 transition-colors flex items-center group w-fit">
                        <svg className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-600"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-100 rounded-3xl p-12 text-center shadow-sm">
                        <p className="text-red-700 text-lg">{error}</p>
                        <Button variant="outline" className="mt-6" onClick={() => window.location.reload()}>Try Again</Button>
                    </div>
                ) : events.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-stone-100 shadow-sm">
                        <p className="text-stone-500 text-lg">No upcoming events yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {events.map((event, i) => (
                            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col md:flex-row">
                                {/* Image Section */}
                                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-stone-100 relative">
                                    {(event.image_url || event.preview_image) ? (
                                        <img
                                            src={event.image_url || event.preview_image!}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center p-8 text-stone-300">
                                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col">
                                    <div className="flex-1">
                                        {event.date && (
                                            <p className="text-sage-700 font-semibold tracking-wider text-sm uppercase mb-3">
                                                {formatDate(event.date)}
                                            </p>
                                        )}
                                        <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mb-4">{event.title}</h3>
                                        <p className="text-stone-600 leading-relaxed text-lg mb-8 whitespace-pre-line">{event.description}</p>
                                    </div>
                                    <Button
                                        variant="primary"
                                        className="w-full md:w-max px-10 py-4 text-base justify-center"
                                        onClick={() => window.open(event.link, '_blank')}
                                    >
                                        Details & Booking
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
