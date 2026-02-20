import HeroSection from '@/components/HeroSection'
import AdvantageSection from '@/components/AdvantageSection'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <HeroSection />

            <AdvantageSection />

            {/* Simplified Path Section */}
            <section id="simplified-path-section" className="py-12 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-[#0B142B] border border-white/20 rounded-2xl p-8 md:p-12 relative overflow-hidden plexus-bg shadow-2xl shadow-blue-500/10">

                    <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full bg-blue-600/10 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
                    <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full bg-teal-500/10 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
                    <div className="absolute top-20 right-24 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-sky-500/50 border-r-[15px] border-r-transparent transform -rotate-45 opacity-50 hidden md:block" aria-hidden="true"></div>

                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            The Simplified Path to Launch
                        </h2>
                        <p className="mt-4 text-xl md:text-2xl text-slate-300 font-light tracking-wide">
                            Turn Your Idea into a Growing Business
                        </p>
                        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
                            Your journey from a groundbreaking idea to a compliant, growing enterprise doesn't have to be
                            complicated. Formsby simplifies the entire process into three clear, actionable steps, so you
                            can focus on building your business.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
                        {/* Step 1 Card */}
                        <div className="bg-gradient-to-b from-sky-900/40 to-sky-950/60 backdrop-blur-sm border-2 border-sky-600/50 rounded-xl p-8 text-center transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:-translate-y-2 mb-8 md:mb-0">
                            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-slate-900 flex items-center justify-center border-2 border-sky-500 text-sky-300 text-3xl font-bold shadow-[0_0_20px_theme(colors.sky.500)]">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-white">Share Your Idea</h3>
                            <p className="mt-2 text-slate-400">to Get a Consultation</p>
                        </div>
                        {/* Step 2 Card */}
                        <div className="bg-gradient-to-b from-sky-900/40 to-sky-950/60 backdrop-blur-sm border-2 border-sky-600/50 rounded-xl p-8 text-center transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:-translate-y-2 mb-8 md:mb-0">
                            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-slate-900 flex items-center justify-center border-2 border-sky-500 text-sky-300 text-3xl font-bold shadow-[0_0_20px_theme(colors.sky.500)]">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-white">Get Registered</h3>
                            <p className="mt-2 text-slate-400">to Obtain a Legal Identity</p>
                        </div>
                        {/* Step 3 Card */}
                        <div className="bg-gradient-to-b from-sky-900/40 to-sky-950/60 backdrop-blur-sm border-2 border-sky-600/50 rounded-xl p-8 text-center transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:-translate-y-2">
                            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-slate-900 flex items-center justify-center border-2 border-sky-500 text-sky-300 text-3xl font-bold shadow-[0_0_20px_theme(colors.sky.500)]">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-white">Stay Compliant</h3>
                            <p className="mt-2 text-slate-400">and Focus on Growth</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisory Section */}
            <section className="py-12 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-500/10 border border-slate-200">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl text-gray-900">Your Strategic Business Advisory Partner</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-medium text-gray-500">
                            At Formsy, we understand that sustained success requires more than just compliance. Our
                            comprehensive business advisory and consulting services offer forward-thinking strategies and
                            actionable insights, empowering your organization to adapt, innovate, and thrive in dynamic
                            global markets.
                        </p>
                    </div>
                    {/* Advisory Cards would go here - simplified for brevity */}
                    <div className="text-center text-gray-400">
                        [Advisory Services Content Placeholder]
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="overflow-hidden rounded-2xl py-12 px-6 sm:px-12 shadow-2xl"
                        style={{ backgroundImage: 'radial-gradient(ellipse 50% 80% at 50% 50%, rgba(29, 78, 216, 0.3), transparent), linear-gradient(to right, #020d2e, #010615)' }}>
                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
                            <div className="text-white">
                                <h2 className="text-2xl sm:text-3xl font-bold">Have Questions? Talk to Our Experts!</h2>
                                <p className="mx-auto mt-2 max-w-lg text-slate-300 md:mx-0">Need personalized advice or have
                                    questions about your business registration or compliance? Our experienced team is ready
                                    to help you anytime.</p>
                            </div>
                            <div className="flex-shrink-0">
                                <a href="tel:+918595430015"
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-amber-600">
                                    <span>Call Us Now</span>
                                    <span className="ml-2 font-semibold" aria-hidden="true">&gt;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
