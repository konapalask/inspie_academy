"use client";
import React from 'react'
import Link from 'next/link'
import { FaMinus, FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    programs: [
      { to: '/neet-coaching-vijayawada', label: 'NEET Coaching in Vijayawada' },
      { to: '/jee-coaching-vijayawada', label: 'JEE Coaching in Vijayawada' },
      { to: '/eamcet-coaching-vijayawada', label: 'EAMCET Coaching in Vijayawada' },
      { to: '/intermediate-mpc-coaching', label: 'Intermediate MPC Coaching' },
      { to: '/intermediate-bipc-coaching', label: 'Intermediate BiPC Coaching' },
      { to: '/intermediate-tuitions-vijayawada', label: 'Intermediate Tuitions' }
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
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/images/aia logo.png"
                alt="Inspire Academy Logo"
                className="h-12 w-auto object-contain bg-white/10 rounded p-1"
              />
              <div>
                <div className="text-xl font-bold tracking-tight">ANDHRA INSPIRE ACADEMY</div>
                <div className="text-sm tracking-wide uppercase text-accent-400">Education Excellence</div>
              </div>
            </div>

            <p className="text-white/80 font-light leading-relaxed mb-8 max-w-sm">
              Leading coaching institute for NEET, JEE, and Board Exam preparation with a proven track record of excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent-400 text-sm" />
                <span className="text-white/80 font-light">Near Benz Circle, Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent-400 text-sm" />
                <a href="tel:+919848628863" className="text-white/80 font-light hover:text-white transition-colors">+91 98486 28863</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent-400 text-sm" />
                <a href="mailto:info@inspireacademy.in" className="text-white/80 font-light hover:text-white transition-colors">info@inspireacademy.in</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors duration-300">
                <FaFacebook className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors duration-300">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors duration-300">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors duration-300">
                <FaLinkedin className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors duration-300">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.to}
                    className="text-white/80 font-light hover:text-accent-400 transition-colors text-sm"
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
                    href={link.to}
                    className="text-white/80 font-light hover:text-accent-400 transition-colors text-sm"
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
                    href={link.to}
                    className="text-white/80 font-light hover:text-accent-400 transition-colors text-sm"
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
      <div className="border-t border-white/10 bg-primary-900/50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm mb-2">
                © {new Date().getFullYear()} Andhra Inspire Academy. All rights reserved.
              </p>
              <p className="text-white/50 text-xs">
                Empowering students to achieve their academic dreams since 2011
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-primary-900 transition-all duration-500 rounded-xl backdrop-blur-sm"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="inline mr-2 text-sm group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
