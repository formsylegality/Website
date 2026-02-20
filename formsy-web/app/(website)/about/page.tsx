import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-black min-h-screen text-gray-50">
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                        alt="Diverse team working together"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-[#020617]"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                            About Our Vision
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                            Building a global ecosystem where every idea can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">succeed</span>.
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            We bridge the gap between innovative ideas and the legal structure required to scale them,
                            ensuring every founder can focus on building properly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-32 px-4 relative">
                <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Who We Are</h2>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">Simplifying implementation globally.</h3>
                            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                                <p>
                                    Formsy is a global professional services platform designed to simplify business
                                    registration, compliance, and growth solutions for entrepreneurs, startups, and
                                    enterprises.
                                </p>
                                <p>
                                    Our core services include company incorporation, startup registration, compliance
                                    management, tax filings, licenses, and intellectual property protection. By combining
                                    technology with expert-driven support, we deliver fast, transparent, and reliable
                                    solutions.
                                </p>
                            </div>
                        </div>
                        <div className="relative group cursor-pointer lg:order-last">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative rounded-2xl shadow-2xl w-full h-[400px] border border-white/10 transform transition duration-500 group-hover:scale-[1.02] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision Section */}
            <section className="py-20 sm:py-32 px-4 relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Purpose</span>
                        </h2>
                        <p className="text-slate-400 text-lg">We are committed to empowering the startup ecosystem worldwide by
                            providing accessible, scalable, and hassle-free services.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Our Mission */}
                        <div className="glass-card p-10 rounded-3xl relative group hover:bg-white/5 transition duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300 border border-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                To empower entrepreneurs by simplifying complex legal and compliance processes, enabling
                                them to focus on innovation and growth.
                            </p>
                        </div>

                        {/* Card 2: Trust */}
                        <div className="glass-card p-10 rounded-3xl relative group hover:bg-white/5 transition duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/5 flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300 border border-teal-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Trust & Reliability</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                Building lasting relationships based on transparency and expertise, ensuring our clients
                                have peace of mind and confidence.
                            </p>
                        </div>

                        {/* Card 3: Global Reach */}
                        <div className="glass-card p-10 rounded-3xl relative group hover:bg-white/5 transition duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300 border border-purple-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                Providing seamless, accessible business solutions on a global scale, helping startups and
                                enterprises thrive in any market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="md:order-2">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Why Formsy?</h2>
                            <ul className="mt-8 space-y-6">
                                {[
                                    { title: 'Simplified Process', desc: 'We streamline complex procedures into easy-to-follow steps.', icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z' },
                                    { title: 'Trust and Reliability', desc: 'Our expert-driven approach ensures accuracy and peace of mind.', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751A11.959 11.959 0 0112 2.75c-2.176 0-4.205.6-5.902 1.636z' },
                                    { title: 'Global Reach', desc: 'We empower startups worldwide to launch and scale seamlessly.', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 bg-blue-900/70 rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-xl text-white font-semibold">{item.title}</h4>
                                            <p className="text-slate-300 mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:order-1">
                            <div className="relative rounded-lg shadow-xl overflow-hidden w-full h-[300px] sm:h-[400px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                    alt="Professional team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="overflow-hidden rounded-2xl py-12 px-6 sm:px-12 shadow-2xl relative"
                        style={{ backgroundImage: 'radial-gradient(ellipse 50% 80% at 50% 50%, rgba(29, 78, 216, 0.3), transparent), linear-gradient(to right, #020d2e, #010615)' }}>
                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left relative z-10">
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
        </div>
    )
}
