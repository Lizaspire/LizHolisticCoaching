import React from 'react';
import enesImage from '../src/assets/founder-portrait.jpg';

export const MeetEnes: React.FC = () => {
    return (
        <section id="meet-liz" className="py-16 lg:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image - Left Side */}
                    <div className="relative mb-8 lg:mb-0">
                        <div className="absolute inset-0 bg-sage-100 rounded-3xl transform -rotate-3 scale-105"></div>
                        <img
                            src={enesImage}
                            alt="Liz, your holistic coach, in a gym setting"
                            className="relative rounded-3xl shadow-xl w-full object-cover h-[350px] sm:h-[450px] lg:h-[550px]"
                        />
                    </div>

                    {/* Text Content - Right Side */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 mb-4 font-serif">
                            Meet Your Coach
                        </h2>

                        <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-6">
                            A grounded, patient coach who understands real life.
                        </h3>

                        <div className="space-y-4 text-stone-600 leading-relaxed">
                            <p>
                                I am Liz, the coach behind this programme. My approach to fitness is grounded in understanding that everyone's journey is unique, and real progress comes from sustainable habits tailored to your life.
                            </p>

                            <p>
                                With years of experience in holistic coaching, my goal is to help you build habits you can actually maintain, whether you are nervous to start, rebuilding confidence or pushing for new fitness levels.
                            </p>

                            <p>
                                This coaching is my passion. I work with people who want to feel better in their bodies, whatever their age or starting point. If you want patient, personalised guidance without pressure or judgment, you are in the right place.
                            </p>
                        </div>

                        {/* Quote Box */}
                        <div className="mt-8 bg-sage-50 border-l-4 border-sage-600 p-6 rounded-r-xl">
                            <p className="font-serif text-lg italic text-sage-900">
                                "Health is built like a garden, with care, consistency and patience."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
