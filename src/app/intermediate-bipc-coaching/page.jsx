"use client";
import React from 'react'
import Link from 'next/link'
import { FaDna } from 'react-icons/fa'

export default function InterBipcCoaching() {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white py-24 px-6 md:px-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <FaDna className="text-6xl text-pink-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">Intermediate BiPC Coaching</h1>
                    <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Excel in Biology, Physics, and Chemistry with our expert faculty and modern laboratories.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Your Medical Dream</h3>
                        <p className="text-gray-600 mb-6">BiPC is the stepping stone to becoming a doctor. Our program is integrated with the best <Link href="/neet-coaching-vijayawada" className="text-pink-600 hover:text-pink-800 font-semibold underline decoration-pink-200 underline-offset-4">NEET coaching in Vijayawada</Link> available.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Agriculture & Pharma</h3>
                        <p className="text-gray-600 mb-6">Explore alternative medical careers with our specialized <Link href="/eamcet-coaching-vijayawada" className="text-pink-600 hover:text-pink-800 font-semibold underline decoration-pink-200 underline-offset-4">AP EAMCET coaching</Link> tailored for BiPC students.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Personalized Mentorship</h3>
                        <p className="text-gray-600 mb-6">Struggling with Botany or Zoology memorization? Join our dedicated <Link href="/intermediate-tuitions-vijayawada" className="text-pink-600 hover:text-pink-800 font-semibold underline decoration-pink-200 underline-offset-4">Intermediate tuitions for BiPC students</Link> and strengthen your biological sciences core.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
