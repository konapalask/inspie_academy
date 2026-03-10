"use client";
import React from 'react'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa'

export default function JeeCoaching() {
    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-24 px-6 md:px-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <FaGraduationCap className="text-6xl text-blue-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">Best JEE Coaching in Vijayawada</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive preparation for IIT-JEE Mains and Advanced with expert faculty and proven methodologies.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Advanced Learning</h3>
                        <p className="text-gray-600 mb-6">Our JEE curriculum covers both <Link href="/intermediate-mpc-coaching" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">MPC conceptual foundation</Link> and advanced problem-solving techniques.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Individual Monitoring</h3>
                        <p className="text-gray-600 mb-6">Students needing extra help in physics or maths can access our <Link href="/intermediate-tuitions-vijayawada" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">specialized tuitions in Vijayawada</Link>.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Top Results</h3>
                        <p className="text-gray-600 mb-6">Check our latest results or <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-200 underline-offset-4">contact us</Link> for enrollment details.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
