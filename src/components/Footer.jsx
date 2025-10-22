import React from 'react'
import { Link } from 'react-router-dom'
import { FaMinus, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    programs: [
      { to: '/courses', label: 'NEET Preparation' },
      { to: '/courses', label: 'JEE Main & Advanced' },
      { to: '/courses', label: 'EAMCET Coaching' },
      { to: '/courses', label: 'Foundation Program' }
    ],
    company: [
      { to: '/about', label: 'About Us' },
      { to: '/results', label: 'Results' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/blog', label: 'Blog' }
    ],
    support: [
      { to: '/contact', label: 'Contact Us' },
      { to: '/admissions', label: 'Admissions' },
      { to: '/faq', label: 'FAQ' },
      { to: '/student-login', label: 'Student Login' }
    ]
  }

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="/images/aia logo.png" 
                alt="Inspire Academy Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="text-xl font-semibold tracking-tight">Inspire Academy</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/50">Education Excellence</div>
              </div>
            </div>
            
            <p className="text-white/70 font-light leading-relaxed mb-8 max-w-sm">
              Leading coaching institute for NEET, JEE, and EAMCET preparation with proven track record of excellence.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMinus className="text-xs mt-1.5 flex-shrink-0" />
                <span className="text-white/70 font-light">Near Benz Circle, Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMinus className="text-xs mt-1.5 flex-shrink-0" />
                <a href="tel:+919848628863" className="text-white/70 font-light hover:text-white transition-colors">+91 98486 28863</a>
              </div>
              <div className="flex items-start gap-3">
                <FaMinus className="text-xs mt-1.5 flex-shrink-0" />
                <a href="mailto:info@inspireacademy.in" className="text-white/70 font-light hover:text-white transition-colors">info@inspireacademy.in</a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/70 font-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/70 font-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/70 font-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs tracking-wider">
              © {new Date().getFullYear()} Inspire Academy. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="border border-white/30 px-6 py-2 text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-500"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="inline mr-2 text-xs" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
