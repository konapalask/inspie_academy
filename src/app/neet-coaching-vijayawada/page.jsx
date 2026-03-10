"use client";
import React from 'react'
import Link from 'next/link'
import { FaUserMd, FaChalkboardTeacher, FaClipboardCheck, FaBookOpen } from 'react-icons/fa'

export default function NeetCoaching() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-primary-900 border-b-8 border-accent-500 pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
                {/* Placeholder image background overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-20 mix-blend-overlay bg-cover bg-center"
                    style={{ backgroundImage: "url('/banners/IMG_7603.PNG')" }}
                ></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full mb-6">
                        <span className="text-accent-400 font-bold uppercase tracking-widest text-sm">Best Coaching Institute in Vijayawada</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Best NEET Coaching in <span className="text-accent-500">Vijayawada</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                        Andhra Inspire Academy – Your Pathway to Top Medical Colleges
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-3 gap-12">

                {/* Left Column (Content) */}
                <div className="lg:col-span-2 space-y-12">

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-accent-500 pl-4">The Best NEET Preparation in Andhra Pradesh</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            Cracking the National Eligibility cum Entrance Test (NEET) requires more than just hard work—it demands the right strategy, expert mentorship, and consistent practice. At <strong>Andhra Inspire Academy</strong>, we provide the best NEET coaching in Vijayawada, structured to help students achieve top ranks and secure admissions in premier medical colleges across India.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Whether you are looking for integrated <Link href="/intermediate-bipc-coaching" className="text-primary-600 font-bold hover:underline">Intermediate BiPC coaching</Link> or dedicated long-term NEET preparation, our expert faculty ensures complete conceptual clarity and examination readiness.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Andhra Inspire Academy for NEET Coaching?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Learn from Top Faculty', icon: FaChalkboardTeacher, desc: 'Our team consists of highly experienced subject experts who have mentored hundreds of successful medical aspirants.' },
                                { title: 'Comprehensive Material', icon: FaBookOpen, desc: 'Get access to well-researched, up-to-date study resources designed strictly according to the latest NTA NEET syllabus.' },
                                { title: 'Rigorous Testing System', icon: FaClipboardCheck, desc: 'Daily practice sheets (DPPs), weekly mock tests, and grand tests with detailed performance analysis to track progress.' },
                                { title: 'Personalized Attention', icon: FaUserMd, desc: 'Small batch sizes to ensure individual doubt-solving sessions and personalized mentoring for every student.' }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                                        <feature.icon className="text-2xl text-primary-900" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                        {/* Needs Extra Help section part of why choose us */}
                        <div className="mt-6 bg-accent-50 p-6 rounded-2xl border border-accent-100 text-center">
                            <p className="text-slate-700 font-medium">
                                Need Extra Help? We also offer specialized <Link href="/intermediate-tuitions-vijayawada" className="text-accent-600 font-bold hover:underline">Intermediate tuitions</Link> for individual focus on weak subjects.
                            </p>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-primary-900 pl-4">Our Unique Teaching Methodology</h2>
                        <p className="text-slate-600 mb-8 text-lg">We believe in a structured approach—Concept Building, Application, Testing, and Revision—ensuring students are fully prepared on exam day.</p>

                        {/* Video Placeholder */}
                        <div className="aspect-w-16 aspect-h-9 bg-slate-900 rounded-xl overflow-hidden relative shadow-lg group cursor-pointer mb-8">
                            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Teaching Methodology Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                                </div>
                            </div>
                        </div>

                        <p className="text-center font-bold text-slate-700 italic border-l-4 border-slate-300 pl-4 bg-slate-50 py-4 pr-4 rounded-r-lg">
                            "Success in NEET is not a miracle; it's a result of proper guidance and strategic preparation."
                        </p>
                    </section>

                </div>

                {/* Right Column (Sidebar / Admissions) */}
                <div className="space-y-8">
                    <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl sticky top-24">
                        <h3 className="text-2xl font-bold mb-4">Admissions Open 2024-25</h3>
                        <p className="text-blue-100 mb-6">Join the finest NEET coaching institute in Vijayawada and achieve your dream of becoming a doctor.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-white text-xs font-bold">✓</span></div>
                                <span className="font-medium text-sm">Long-term & Short-term Batches</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-white text-xs font-bold">✓</span></div>
                                <span className="font-medium text-sm">Integrated BiPC Program</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-white text-xs font-bold">✓</span></div>
                                <span className="font-medium text-sm">Crash Courses Available</span>
                            </li>
                        </ul>

                        <Link href="/contact" className="block w-full bg-white text-primary-900 font-bold text-center py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                            Book a Free Consultation
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Explore Related Programs</h4>
                        <ul className="space-y-3">
                            <li><Link href="/jee-coaching-vijayawada" className="text-slate-600 hover:text-accent-500 font-medium transition-colors">JEE Coaching in Vijayawada</Link></li>
                            <li><Link href="/eamcet-coaching-vijayawada" className="text-slate-600 hover:text-accent-500 font-medium transition-colors">AP EAMCET Coaching Center</Link></li>
                            <li><Link href="/intermediate-mpc-coaching" className="text-slate-600 hover:text-accent-500 font-medium transition-colors">Intermediate MPC Coaching</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
