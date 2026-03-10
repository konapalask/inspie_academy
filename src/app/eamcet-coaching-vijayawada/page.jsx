"use client";
import React from 'react'
import Link from 'next/link'
import { FaLaptopCode } from 'react-icons/fa'

export default function EamcetCoaching() {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 text-white py-24 px-6 md:px-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <FaLaptopCode className="text-6xl text-green-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">EAMCET Coaching in Vijayawada</h1>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Expert guidance for AP EAMCET securing top ranks in Engineering and Agriculture streams.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Board Exam Excellence</h3>
                        <p className="text-gray-600 mb-6">EAMCET requires a strong intermediate foundation. Whether you need <Link href="/intermediate-mpc-coaching" className="text-green-600 hover:text-green-800 font-semibold underline decoration-green-200 underline-offset-4">MPC & BiPC coaching in Vijayawada</Link>, our programs are designed to maximize both IPE and entrance scores.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Personalized Attention</h3>
                        <p className="text-gray-600 mb-6">If you are struggling with specific subjects in intermediate, we offer dedicated <Link href="/intermediate-tuitions-vijayawada" className="text-green-600 hover:text-green-800 font-semibold underline decoration-green-200 underline-offset-4">Intermediate tuition support</Link> to help you bridge any learning gaps.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Enroll Available Now</h3>
                        <p className="text-gray-600 mb-6">Join the best <Link href="/contact" className="text-green-600 hover:text-green-800 font-semibold underline decoration-green-200 underline-offset-4">AP EAMCET coaching institute</Link> in the region and secure your seat in top universities.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
