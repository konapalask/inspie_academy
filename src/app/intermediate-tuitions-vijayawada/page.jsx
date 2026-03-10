"use client";
import React from 'react'
import Link from 'next/link'
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardCheck, FaBookOpen } from 'react-icons/fa'

export default function InterTuitions() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-primary-900 border-b-8 border-accent-500 pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
                {/* Placeholder image background overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-20 mix-blend-overlay bg-cover bg-center"
                    style={{ backgroundImage: "url('/banners/IMG_7612.PNG')" }}
                ></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full mb-6 relative">
                        {/* Custom Pencil Icon purely with CSS/HTML */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center transform rotate-45 shadow-lg animate-bounce">
                            <span className="text-white text-xs">✏️</span>
                        </div>
                        <span className="text-accent-400 font-bold uppercase tracking-widest text-sm">Best Intermediate Tuitions in Vijayawada</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Personalized Learning for <span className="text-accent-500">Better Results</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                        Andhra Inspire Academy offers one of the most trusted and result-oriented Intermediate tuition programs in Vijayawada, Andhra Pradesh.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                            Book Free Trial Class
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-3 gap-12">

                {/* Left Column (Content) */}
                <div className="lg:col-span-2 space-y-12">

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-slate-600 leading-relaxed text-lg mb-6">
                            Our tuition classes are designed to provide individual academic support, concept clarity, and exam confidence for students of Class 11 & Class 12.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg font-medium bg-slate-50 p-6 rounded-xl border-l-4 border-accent-500">
                            Whether a student needs extra guidance, doubt clearing, or score improvement, our tuition program ensures personal attention and measurable progress.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Why Choose Andhra Inspire Academy for Intermediate Tuitions?</h2>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                '📍 Located in Vijayawada, Andhra Pradesh',
                                '👨‍🏫 Experienced and supportive faculty',
                                '👥 One-to-one doubt clarification',
                                '📝 Regular chapter-wise tests and revisions',
                                '📚 Focus on IPE (Board Exams) + Competitive Basics'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-primary-900 pl-4">Courses Offered</h2>

                        <div className="space-y-6">
                            <div className="border border-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                                    <FaBookOpen className="text-accent-500" />
                                    Intermediate MPC Tuitions
                                </h3>
                                <p className="text-slate-600 mb-3">Focused coaching on Mathematics, Physics, and Chemistry (MPC). We help students build a strong foundation for their board exams while strengthening concepts for future engineering entrances.</p>
                                <Link href="/intermediate-mpc-coaching" className="text-accent-600 font-bold text-sm hover:underline">Learn more about MPC coaching →</Link>
                            </div>

                            <div className="border border-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                                    <FaBookOpen className="text-accent-500" />
                                    Intermediate BiPC Tuitions
                                </h3>
                                <p className="text-slate-600 mb-3">Expert guidance in Biology, Physics, and Chemistry (BiPC). Ideal for students finding board exams challenging or needing an extra push to maximize their IPE score.</p>
                                <Link href="/intermediate-bipc-coaching" className="text-accent-600 font-bold text-sm hover:underline">Learn more about BiPC coaching →</Link>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Teaching Approach</h2>
                        <div className="grid sm:grid-cols-3 gap-6 text-center">
                            {[
                                { step: '1', title: 'Concept Explanation', desc: 'Simplifying complex topics.' },
                                { step: '2', title: 'Problem Solving', desc: 'Step-by-step guidance on answering exam questions.' },
                                { step: '3', title: 'Test & Review', desc: 'Weekly tests to ensure students are prepared for final exams.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-primary-50 p-6 rounded-2xl border border-primary-100 relative pt-10">
                                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Column (Sidebar / Admissions) */}
                <div className="space-y-8">
                    <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl sticky top-24">
                        <h3 className="text-2xl font-bold mb-4">Admissions Open 2024-25</h3>
                        <p className="text-blue-100 mb-6">Invest in your child's education today. Strong intermediate marks are the foundation of a successful career.</p>

                        <div className="bg-white/10 p-4 rounded-xl mb-8">
                            <p className="font-bold mb-2">📞 Call Now:</p>
                            <a href="tel:+919848628863" className="text-2xl font-bold text-accent-400 hover:text-white transition-colors">+91 98486 28863</a>
                        </div>

                        <Link href="/contact" className="block w-full bg-accent-500 text-white font-bold text-center py-4 rounded-xl hover:bg-accent-600 transition-colors shadow-lg text-lg">
                            Get Subject-Wise Details
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
