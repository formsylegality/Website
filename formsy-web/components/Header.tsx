'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            // Logic from script.js (though not explicitly seen there, usually header changes on scroll)
            // The original script didn't seem to have explicit scroll listener for header background, 
            // but the CSS suggests it might be static or sticky. 
            // The original HTML had 'fixed top-0' and 'bg-black/50 backdrop-blur-lg'.
            // We'll keep it simple for now.
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Resources', href: '#' },
        { name: 'Blogs & Guides', href: '/blog' },
        { name: 'Partner with us', href: '#' }, // Placeholder
        { name: 'Contact us', href: '#' }, // Placeholder
    ]

    return (
        <>
            <header id="main-header" class={`fixed top-0 left-0 right-0 z-50 p-2 sm:p-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'p-4'}`}>
                <div className="container mx-auto px-4">
                    <div id="header-inner"
                        className="flex items-center justify-between h-16 rounded-full border border-white/10 px-4 sm:px-6 bg-black/50 backdrop-blur-lg shadow-xl">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-3 group">
                                <Image
                                    className="h-10 sm:h-12 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                                    src="https://ik.imagekit.io/3o5ofvzg8/557657344_1495142828294166_4549417873496881086_n-removebg-preview.png"
                                    alt="Formsy Logo"
                                    width={48}
                                    height={48}
                                />
                                <span className="text-2xl font-bold text-white tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200">
                                    Formsy
                                </span>
                            </Link>
                        </div>
                        <nav className="hidden lg:flex lg:space-x-8">
                            <Link href="/about" className="text-white py-2 font-semibold hover:text-blue-400 transition-colors">About us</Link>
                            <Link href="/services" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 font-medium flex items-center">
                                Services
                                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 font-medium flex items-center">
                                Resources
                                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 font-medium">Blogs & Guides</Link>
                            <Link href="/partner" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 font-medium">Partner with us</Link>
                            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 font-medium">Contact us</Link>
                        </nav>
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="h-6 w-6 text-slate-400 hover:text-white cursor-pointer" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <Link href="/contact"
                                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>Talk to Experts</span>
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button
                                id="mobile-menu-button"
                                aria-label="Open menu"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="fixed inset-0 z-[60] bg-slate-900 p-6">
                    <div className="flex justify-between items-center mb-8">
                        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                className="h-10 w-auto object-contain"
                                src="https://ik.imagekit.io/3o5ofvzg8/557657344_1495142828294166_4549417873496881086_n-removebg-preview.png"
                                alt="Formsy Logo"
                                width={40}
                                height={40}
                            />
                            <span className="text-2xl font-bold text-white">Formsy</span>
                        </Link>
                        <button
                            id="mobile-menu-close-button"
                            aria-label="Close menu"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="h-8 w-8 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4 text-lg text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    )
}
