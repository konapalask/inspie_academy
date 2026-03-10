"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    FaGraduationCap,
    FaBookOpen,
    FaTrophy,
    FaUsers,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaCertificate,
    FaCheckCircle,
    FaArrowRight,
    FaClock,
    FaBook,
    FaMapMarkerAlt,
    FaStethoscope,
    FaCalculator,
    FaSquareRootAlt,
    FaBookReader
} from 'react-icons/fa'
import ExamBanner from '../components/ExamBanner'
import ScrollingBanner from '../components/ScrollingBanner'
import { PrimaryButton, OutlineButton } from '../components/Button'

export default function Home() {
    const [activeCategory, setActiveCategory] = useState('all')

    // Banner images from public/banners folder
    const bannerImages = [
        '/banners/IMG_7603.PNG',
        '/banners/IMG_7605.PNG',
        '/banners/IMG_7606.PNG',
        '/banners/IMG_7607.PNG',
        '/banners/IMG_7612.PNG',
        '/banners/IMG_7615.PNG',
        '/banners/IMG_7616.PNG'
    ]

    const stats = [
        { number: '10,000+', label: 'Students' },
        { number: '85%', label: 'Success' },
        { number: '10+', label: 'Programs' },
        { number: '13+', label: 'Years' }
    ]

    const courses = [
        {
            id: 1,
            title: 'NEET',
            category: 'neet',
            subtitle: 'Complete Medical Entrance Preparation',
            features: ['Daily Motivation', 'Daily Assessment', '100% Syllabus Coverage'],
            img: '/banners/IMG_7603.PNG',
            whatsappMsg: 'NEET Preparation Details'
        },
        {
            id: 2,
            title: 'JEE',
            category: 'jee',
            subtitle: 'IIT-JEE Mains and Advanced Coaching',
            features: ['Expert Faculty', 'Daily Assessment', 'Mock Tests'],
            img: '/banners/IMG_7605.PNG',
            whatsappMsg: 'JEE Preparation Details'
        },
        {
            id: 3,
            title: 'EAMCET',
            category: 'eamcet',
            subtitle: 'State Engineering & Agriculture',
            features: ['Daily Motivation', 'Previous Papers', '100% Syllabus Coverage'],
            img: '/banners/IMG_7606.PNG',
            whatsappMsg: 'EAMCET Coaching Details'
        },
        {
            id: 4,
            title: 'NEET + EAMCET',
            category: 'neet_eamcet',
            subtitle: 'Integrated Biology & Engineering',
            features: ['Dual Certification', 'Daily Assessment', 'Study Material'],
            img: '/banners/IMG_7607.PNG',
            whatsappMsg: 'NEET + EAMCET Details'
        },
        {
            id: 5,
            title: 'MPC',
            category: 'mpc',
            subtitle: 'Maths, Physics, Chemistry',
            features: ['Board Exams', 'Conceptual Clarity', 'Assignments'],
            img: '/banners/IMG_7612.PNG',
            whatsappMsg: 'Intermediate MPC Details'
        },
        {
            id: 6,
            title: 'MEC',
            category: 'mec',
            subtitle: 'Maths, Economics, Commerce',
            features: ['CA Foundation', 'Commerce Focus', 'Mock Tests'],
            img: '/banners/IMG_7615.PNG',
            whatsappMsg: 'Intermediate MEC Details'
        }
    ]

    const testimonials = [
        {
            name: 'Rahul Kumar',
            course: 'JEE Main 2024',
            achievement: 'AIR 156',
            institution: 'IIT Delhi',
            quote: 'The structured approach and dedicated faculty at Inspire Academy helped me secure admission to IIT Delhi.'
        },
        {
            name: 'Priya Sharma',
            course: 'NEET 2024',
            achievement: 'AIR 892',
            institution: 'AIIMS',
            quote: 'Comprehensive study materials and expert mentorship prepared me thoroughly for the examination.'
        },
        {
            name: 'Amit Singh',
            course: 'EAMCET 2024',
            achievement: 'State Rank 89',
            institution: 'JNTU Kakinada',
            quote: 'Small batch sizes ensured individual attention from experienced faculty members.'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Exam Banner - positioned below fixed navbar */}
            <div className="pt-20">
                <ExamBanner />
            </div>

            {/* Scrolling Banner */}
            <ScrollingBanner images={bannerImages} speed={40} />

            {/* Hero Section - Clean Professional Theme */}
            <section className="relative bg-primary-900 overflow-hidden min-h-[600px] sm:min-h-screen flex items-center pt-20">
                {/* Placeholder image background overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center"
                    style={{ backgroundImage: "url('/banners/IMG_7605.PNG')" }}
                ></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 w-full">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Left Content */}
                        <div className="lg:w-1/2 text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white"
                            >
                                Best Coaching Institute <br className="hidden lg:block" />in Vijayawada
                                <span className="block text-accent-400 mt-2">for NEET, JEE, EAMCET & Intermediate</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl font-medium"
                            >
                                <span className="font-bold text-white">Andhra Inspire Academy</span> helps students achieve top results through expert faculty, structured learning and personal attention.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-lg border border-accent-500">
                                    Enroll Now
                                </Link>
                                <Link href="/contact" className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-full font-bold text-lg transition-colors">
                                    Get Free Counseling
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Content - Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="lg:w-1/2 relative hidden lg:block"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                alt="Students studying"
                                className="rounded-2xl shadow-2xl border-4 border-white/20 object-cover h-[500px] w-full"
                            />
                        </motion.div>

                    </div>
                </div>

                {/* Floating Search/Filter Bar */}
                <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 hidden md:block">
                    <div className="container mx-auto px-4 lg:px-20">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 flex items-center justify-between mx-auto max-w-5xl">
                            <div className="flex-1 px-6 py-3 border-r border-slate-200 flex items-center gap-3">
                                <FaBookOpen className="text-primary-600 text-xl" />
                                <span className="text-slate-700 font-semibold text-lg">NEET | JEE | EAMCET</span>
                            </div>
                            <div className="flex-1 px-6 py-3 border-r border-slate-200 flex items-center gap-3">
                                <FaBook className="text-accent-500 text-xl" />
                                <span className="text-slate-700 font-semibold text-lg">MPC & BiPC</span>
                            </div>
                            <div className="flex-1 px-6 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                                    <span className="text-slate-700 font-semibold text-lg">Vijayawada, Andhra Pradesh</span>
                                </div>
                                <FaArrowRight className="text-slate-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-12 sm:py-20 lg:py-32 bg-white mt-12 md:mt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8"
                        >
                            Our Top Rated Excellence <span className="text-accent-500">Core Programs</span>
                        </motion.h2>

                        {/* Premium Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                            {[
                                { value: 'all', label: 'Course' },
                                { value: 'neet', label: 'NEET' },
                                { value: 'jee', label: 'JEE' },
                                { value: 'eamcet', label: 'EAMCET' },
                                { value: 'neet_eamcet', label: 'NEET+EAMCET' },
                                { value: 'mpc', label: 'MPC' },
                                { value: 'mec', label: 'MEC' }
                            ].map((category) => (
                                <button
                                    key={category.value}
                                    onClick={() => setActiveCategory(category.value)}
                                    className={`px-5 py-2.5 text-sm font-bold transition-all duration-300 rounded-full border-2 ${activeCategory === category.value
                                        ? 'bg-primary-900 border-primary-900 text-white'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-primary-900 hover:text-primary-900'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {courses
                            .filter(course => activeCategory === 'all' || course.category === activeCategory)
                            .map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <div className="group bg-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 h-full flex flex-col">
                                        <div className="h-48 sm:h-56 relative w-full overflow-hidden flex-shrink-0">
                                            <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-900 shadow-md z-10">
                                                Top Choice
                                            </div>
                                        </div>
                                        <div className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-white flex-shrink-0 border-b border-slate-100">
                                            <div className="text-xs font-bold text-accent-600 mb-2 sm:mb-3 uppercase tracking-widest">{course.subtitle}</div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
                                            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                                        <FaClock className="text-blue-600 text-xs sm:text-sm" />
                                                    </div>
                                                    <span className="font-medium">1-2 Years</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                                                        <FaUsers className="text-indigo-600 text-xs sm:text-sm" />
                                                    </div>
                                                    <span className="font-medium">Limited Size</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 sm:p-6 lg:p-8 bg-white flex-1 flex flex-col">
                                            <h4 className="font-bold text-slate-900 mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">What's Included:</h4>
                                            <div className="space-y-2 sm:space-y-3 mb-auto">
                                                {course.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                                                            <FaCheckCircle className="text-white text-[8px] sm:text-[10px]" />
                                                        </div>
                                                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-100">
                                                <a
                                                    href={`https://wa.me/919848628863?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}.%20Details:%20${encodeURIComponent(course.whatsappMsg)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs tracking-wider uppercase font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                                                >
                                                    <span>ENROLL NOW</span>
                                                    <FaArrowRight className="text-xs" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <div className="w-8 h-1 bg-accent-500 rounded-full"></div>
                            <span className="text-sm font-bold tracking-widest uppercase text-accent-500">Success Stories</span>
                            <div className="w-8 h-1 bg-accent-500 rounded-full"></div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
                        >
                            Student <span className="text-primary-900">Achievements</span>
                        </motion.h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative"
                            >
                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-900 rounded-full flex items-center justify-center font-bold text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                                        <div className="text-sm text-accent-500 font-bold">{testimonial.course}</div>
                                    </div>
                                </div>

                                <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-2xl font-bold text-primary-900 mb-1">{testimonial.achievement}</div>
                                    <div className="text-sm text-slate-600 font-semibold">{testimonial.institution}</div>
                                </div>

                                <p className="text-slate-600 leading-relaxed text-sm italic">
                                    "{testimonial.quote}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specific Course Inquiries Section */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">Specific Course Inquiries</h2>
                        <p className="text-base sm:text-lg text-slate-600">
                            Ready to take the next step? Explore our detailed program pages and apply directly for admission.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                        <Link href="/neet-coaching-vijayawada" className="px-6 py-3 rounded-full bg-white border border-slate-200 text-blue-600 font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            NEET coaching admission
                        </Link>
                        <Link href="/jee-coaching-vijayawada" className="px-6 py-3 rounded-full bg-white border border-slate-200 text-indigo-600 font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            JEE coaching enrollment
                        </Link>
                        <Link href="/eamcet-coaching-vijayawada" className="px-6 py-3 rounded-full bg-white border border-slate-200 text-green-600 font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            AP EAMCET coaching inquiry
                        </Link>
                        <Link href="/intermediate-mpc-coaching" className="px-6 py-3 rounded-full bg-white border border-slate-200 text-purple-600 font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            Intermediate MPC inquiry
                        </Link>
                        <Link href="/intermediate-bipc-coaching" className="px-6 py-3 rounded-full bg-white border border-slate-200 text-pink-600 font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            Intermediate BiPC inquiry
                        </Link>
                        <Link href="/intermediate-tuitions-vijayawada" className="px-6 py-3 rounded-full bg-[#f05a00] text-white font-bold shadow-md hover:bg-[#d85100] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            Intermediate coaching inquiry
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
                <div className="container mx-auto px-3 sm:px-6 lg:px-16 xl:px-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                                Begin Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Academic Journey</span>
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                                Join thousands of successful students who achieved their academic goals with our proven methodology and expert guidance.
                            </p>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/contact" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105">
                                Start Your Journey
                            </Link>
                            <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-all hover:scale-105">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
