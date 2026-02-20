import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-28">
            <div className="absolute inset-0 bg-grid-gray-500/[0.04] bg-[bottom_1px_center]"
                style={{ maskImage: 'linear-gradient(to bottom, transparent, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, white, transparent)' }}>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
                        Seamless <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">Registrations</span>
                        <br />
                        Effortless <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">Compliance</span>
                        <br />
                        Limitless <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">Growth</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Building a secure foundation for your business with expert-led legal, financial, and corporate
                        compliance solutions for global operations.
                    </p>
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-4 shadow-2xl"
                            style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.2), 0 0 20px 0px rgba(59, 130, 246, 0.15) inset' }}>
                            <form action="#" method="POST" className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <div>
                                    <label htmlFor="hero-name" className="sr-only">Your Name</label>
                                    <input type="text" name="hero-name" id="hero-name" placeholder="Enter Your Name"
                                        className="block w-full rounded-md border-gray-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm text-brand-dark placeholder-gray-500 bg-gray-100 py-3 px-4 transition-colors focus:bg-white text-gray-900" />
                                </div>
                                <div>
                                    <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                                    <input type="tel" name="hero-phone" id="hero-phone"
                                        placeholder="Enter your PhoneNo."
                                        className="block w-full rounded-md border-gray-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm text-brand-dark placeholder-gray-500 bg-gray-100 py-3 px-4 transition-colors focus:bg-white text-gray-900" />
                                </div>
                                <div>
                                    <label htmlFor="hero-email" className="sr-only">Email</label>
                                    <input type="email" name="hero-email" id="hero-email" placeholder="Enter your Email"
                                        className="block w-full rounded-md border-gray-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm text-brand-dark placeholder-gray-500 bg-gray-100 py-3 px-4 transition-colors focus:bg-white text-gray-900" />
                                </div>
                                <div className="md:col-span-2 relative">
                                    <label htmlFor="hero-service" className="sr-only">Select your service</label>
                                    <select id="hero-service" name="hero-service"
                                        className="appearance-none block w-full h-full rounded-md border-gray-200 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm text-gray-500 bg-gray-100 py-3 px-4 transition-colors focus:bg-white">
                                        <option>Select your service</option>
                                        <option>Company Registration</option>
                                        <option>IPR</option>
                                        <option>Taxation & Compliance</option>
                                        <option>Consultation</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        className="w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-3 rounded-md text-xs font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center uppercase tracking-wider text-center leading-tight">
                                        Claim Your Free<br />Consultation
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
