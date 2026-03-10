"use client";
import React from 'react'
import Link from 'next/link'
import { FaSquareRootAlt } from 'react-icons/fa'

export default function InterMpcCoaching() {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white py-24 px-6 md:px-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <FaSquareRootAlt className="text-6xl text-blue-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">Intermediate MPC Coaching</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Master Maths, Physics, and Chemistry with our comprehensive IPE-integrated coaching.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">IIT Foundation</h3>
                        <p className="text-gray-600 mb-6">MPC is the base for elite engineering programs. Our curriculum is tailored for <Link href="/jee-coaching-vijayawada" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">the best JEE coaching in Vijayawada</Link>.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">State Engineering</h3>
                        <p className="text-gray-600 mb-6">Excel in local state entrance exams with our integrated <Link href="/eamcet-coaching-vijayawada" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">AP EAMCET coaching programs</Link> for MPC students.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Expert Tutoring</h3>
                        <p className="text-gray-600 mb-6">Do you need help with complex calculus or organic chemistry? Our <Link href="/intermediate-tuitions-vijayawada" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">Intermediate tuition services</Link> provide the extra focus you need to excel.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
