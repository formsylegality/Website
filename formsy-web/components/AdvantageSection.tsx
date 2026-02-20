'use client'

import { useState, useEffect, useRef } from 'react'

const advantages = [
    {
        title: 'Seamless Onboarding',
        desc1: 'Start with a simple idea. Our intuitive platform guides you through every step, making complex processes feel easy.',
        desc2: 'No jargon, no confusion—just clear, straightforward guidance.',
        transforms: [
            'translateX(-10px) translateY(5px) rotate(-3deg) scale(1.05)',
            'translateX(-5px) translateY(-3px) rotate(2deg) scale(1.02)',
            'translateX(5px) translateY(3px) rotate(-1deg) scale(1.03)'
        ]
    },
    {
        title: 'Expert-Led Process',
        desc1: 'Our team of legal and financial experts ensures your registration and compliance are handled with precision.',
        desc2: 'We manage the details, so you can focus on your vision.',
        transforms: [
            'translateX(10px) translateY(-5px) rotate(3deg) scale(1.06)',
            'translateX(3px) translateY(5px) rotate(-2deg) scale(1.01)',
            'translateX(-4px) translateY(-2px) rotate(1deg) scale(1.04)'
        ]
    },
    {
        title: 'Tech-Driven Efficiency',
        desc1: 'Leverage our powerful technology for faster filings, real-time updates, and secure document management.',
        desc2: 'Experience a smarter, more efficient way to manage your business compliance.',
        transforms: [
            'translateX(0) translateY(0) rotate(0) scale(1)',
            'translateX(0) translateY(0) rotate(0) scale(1)',
            'translateX(0) translateY(0) rotate(0) scale(1)'
        ]
    }
];

export default function AdvantageSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const startLoop = () => {
        if (intervalRef.current) return;
        setIsVisible(true);
        // Show 0 immediately
        setCurrentIndex(0);

        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % advantages.length);
        }, 3500);
    }

    const stopLoop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsVisible(false);
        setCurrentIndex(0); // Reset to default state
    }

    return (
        <section
            id="formsy-advantage"
            className="py-12 sm:py-8 px-4 sm:px-6 lg:px-8"
            onMouseEnter={() => { setIsHovered(true); startLoop(); }}
            onMouseLeave={() => { setIsHovered(false); stopLoop(); }}
        >
            <div className="subtle-bg rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-500/10 border border-slate-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Animated Text Content */}
                        <div className="relative min-h-[300px] flex flex-col justify-center text-center lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl text-gray-900">The Formsy Advantage</h2>
                            <p className="mt-4 max-w-2xl text-lg text-brand-medium mx-auto lg:mx-0 text-gray-500">See how we simplify your journey.</p>

                            <div className={`advantage-content mt-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                <h3 className="text-2xl font-bold text-brand-primary mb-2 text-blue-600">{advantages[currentIndex].title}</h3>
                                <div className="mt-4 text-lg text-brand-medium leading-relaxed space-y-3 text-gray-600">
                                    <p>{advantages[currentIndex].desc1}</p>
                                    <p>{advantages[currentIndex].desc2}</p>
                                </div>
                            </div>

                            {!isVisible && (
                                <div className="advantage-content mt-8 opacity-100">
                                    <h3 className="text-2xl font-bold text-gray-300 mb-2">Hover to Reveal</h3>
                                    <p className="text-gray-400">Interact with the cloud to see our advantages.</p>
                                </div>
                            )}

                        </div>

                        {/* Right Column: Animated Graphic */}
                        <div id="cloud-animation-container" className="relative flex justify-center items-center h-full min-h-[300px] order-first lg:order-last">
                            <svg className="w-64 h-64 lg:w-80 lg:h-80 transition-all duration-500" viewBox="0 0 250 200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <filter id="cloud-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="5" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.2" />
                                    </filter>
                                </defs>
                                <g filter="url(#cloud-shadow)">
                                    <path
                                        d="M185.7,113.1c-2.3-20.9-19.4-37.1-40.7-37.1c-5.8,0-11.4,1.2-16.5,3.5c-6.8-19.1-25.5-32.6-47.5-32.6 c-27.2,0-49.3,21.6-49.9,48.5c-15.8,4.3-27.1,18.7-27.1,35.5c0,20.4,16.8,36.9,37.5,36.9h120c23.2,0,42-18.4,42-41.2 C203.5,132.8,196.3,120.3,185.7,113.1z"
                                        fill="#D6E3FF"
                                        style={{ transform: isVisible ? advantages[currentIndex].transforms[2] : 'none', transition: 'transform 0.6s ease' }}
                                    />
                                    <path
                                        d="M185.7,103.1c-2.3-20.9-19.4-37.1-40.7-37.1c-5.8,0-11.4,1.2-16.5,3.5c-6.8-19.1-25.5-32.6-47.5-32.6 c-27.2,0-49.3,21.6-49.9,48.5c-15.8,4.3-27.1,18.7-27.1,35.5c0,20.4,16.8,36.9,37.5,36.9h120c23.2,0,42-18.4,42-41.2 C203.5,122.8,196.3,110.3,185.7,103.1z"
                                        fill="#A8C5FF"
                                        style={{ transform: isVisible ? advantages[currentIndex].transforms[1] : 'none', transition: 'transform 0.6s ease' }}
                                    />
                                    <path
                                        d="M185.7,93.1c-2.3-20.9-19.4-37.1-40.7-37.1c-5.8,0-11.4,1.2-16.5,3.5C121.7,40.4,103,26.9,81,26.9 c-27.2,0-49.3,21.6-49.9,48.5c-15.8,4.3-27.1,18.7-27.1,35.5c0,20.4,16.8,36.9,37.5,36.9h120c23.2,0,42-18.4,42-41.2 C203.5,112.8,196.3,100.3,185.7,93.1z"
                                        fill="#8EADFF"
                                        style={{ transform: isVisible ? advantages[currentIndex].transforms[0] : 'none', transition: 'transform 0.6s ease' }}
                                    />
                                </g>
                            </svg>

                            <div className={`absolute inset-0 flex justify-center items-center pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="h-20 w-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                                    <svg className="h-10 w-10 text-brand-primary text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
