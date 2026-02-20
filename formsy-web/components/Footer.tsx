import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-400 border-t border-slate-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">Formsy</h3>
                        <p className="mt-4">123 Business Lane, Suite 100<br />Startup City, ST 12345</p>
                        <p className="mt-2">contact@formsy.com</p>
                        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                            {/* Social Icons would go here */}
                        </div>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-lg text-white">Services</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Trademark Registration</a></li>
                            <li><a href="#" className="hover:text-white">Company Incorporation</a></li>
                            <li><a href="#" className="hover:text-white">GST Filing</a></li>
                            <li><Link href="/services" className="hover:text-white">Compliance</Link></li>
                        </ul>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-lg text-white">Company</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><Link href="/blog" className="hover:text-white">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-lg text-white">Legal</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
                    <p>&copy; 2024 Formsy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
