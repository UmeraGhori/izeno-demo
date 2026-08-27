import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iZeno | Certified Experts Atlassian Red Hat SugarCRM CloudBees",
  description: "iZeno provides enterprises with best-in-class technology solutions they need to keep their business running seamlessly.",
};

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://izeno.com/wp-content/uploads/2025/01/izenologo.png" 
            alt="iZeno Logo" 
            width={150} 
            height={50}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link href="#" className="hover:text-blue-600 transition-colors">Solutions</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Partners</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Insights</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">About Us</Link>
        </nav>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="font-extrabold text-2xl tracking-tighter text-white">iZeno</div>
          <p className="text-sm leading-relaxed text-slate-400 pr-4">
            Headquartered in Singapore with operations in Malaysia, Indonesia, Thailand, and the Philippines. Redefining Businesses through Digital Transformation since 2003.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-blue-400 transition-colors">DevOps</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">ITSM</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Events</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Certifications</h4>
          <p className="text-sm text-slate-400">Atlassian Platinum Solution Partner</p>
          <p className="text-sm text-slate-400 mt-2">Red Hat Premier Partner</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} iZeno. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
           <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
           <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 pt-20`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
