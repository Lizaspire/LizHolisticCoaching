import React from 'react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Free chat",
            body: "A friendly conversation about your goals, worries, lifestyle and preferences. No pressure. You decide if coaching with me feels right."
        },
        {
            number: "2",
            title: "Personal questionnaire",
            body: "You receive a detailed questionnaire covering your age, routine, injuries, confidence level and goals. Using your answers, I design a complete plan tailored only to you."
        },
        {
            number: "3",
            title: "Your personalised programme",
            body: "You get login access to the app with workouts, progress trackers, nutrition tools, mindfulness support and a direct button to ask me anything when you need help. Your initial plan covers 8–12 weeks. From there we can bring in new goals & continue to find the nutrition routine that works best for you."
        }
    ];

    return (
        <section id="how-it-works" className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        How It Works
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        The process is straightforward. You talk to me, share your goals and where you are at, and I build a practical, personalised plan that is presented within the app. We can adjust each week to ensure that every aspect of the programme is working for you.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-3xl border border-sage-100 p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(167,185,169,0.3),0_0_20px_2px_rgba(167,185,169,0.1)] flex flex-col h-full transform transition-all hover:-translate-y-2 duration-300">
                            {/* Step Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white text-xl font-bold shrink-0">
                                    {step.number}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 font-serif">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-sage-50 mb-8" />

                            {/* Body */}
                            <div className="flex-1">
                                <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line">
                                    {step.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
