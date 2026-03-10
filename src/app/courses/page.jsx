"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaClock, FaUsers, FaBook } from 'react-icons/fa'

export default function Courses() {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const courses = [
        {
            id: 1,
            title: 'NEET Preparation',
            category: 'medical',
            subtitle: 'Complete Medical Entrance Excellence',
            duration: '1-2 Years',
            batchSize: 'Limited Intake',
            sessions: '6 Days/Week',
            description: 'Our NEET program is meticulously designed to transform medical aspirants into successful doctors. We focus on deep conceptual understanding of Physics, Chemistry, and Biology.',
            img: '/banners/IMG_7603.PNG',
            features: [
                'Complete NCERT-focused syllabus coverage',
                'Daily practice sheets (DPP) & regular assessments',
                'State-of-the-art laboratory for practical concepts',
                'Personal mentorship from expert medical faculty',
                'Extensive test series mirroring actual NEET pattern'
            ],
            highlights: [
                '85% success rate in recent years',
                'Individual doubt-clearing sessions',
                'Focused training for high-weightage topics'
            ]
        },
        {
            id: 2,
            title: 'JEE Main & Advanced',
            category: 'engineering',
            subtitle: 'Engineering Entrance Mastery',
            duration: '2-Year Integrated',
            batchSize: 'Small Batches',
            sessions: '6 Days/Week',
            description: 'Prepare for India\'s toughest engineering entrances with our structured and intensive JEE program. We bridge the gap between school curriculum and competitive requirements.',
            img: '/banners/IMG_7605.PNG',
            features: [
                'In-depth Mathematics, Physics, and Chemistry modules',
                'Advanced problem-solving & critical thinking training',
                'Regular mock tests on NTA-style platform',
                'Experienced JEE mentors with proven track records',
                'Comprehensive study material & question banks'
            ],
            highlights: [
                'Consistent top ranks in JEE Mains/Advanced',
                'Mentorship from IIT alumni faculty',
                'Focus on speed and accuracy optimization'
            ]
        },
        {
            id: 3,
            title: 'EAMCET Coaching',
            category: 'engineering',
            subtitle: 'State Level Success',
            duration: '12 Months',
            batchSize: 'Personalized Group',
            sessions: '6 Days/Week',
            description: 'Excel in AP & TS EAMCET with our dedicated coaching program. We provide targeted preparation for state-level engineering and agricultural entrances.',
            img: '/banners/IMG_7606.PNG',
            features: [
                'State board curriculum integrated preparation',
                'Extensive previous year question analysis',
                'Weekly full-length mock examinations',
                'Special sessions for local state-level patterns',
                'Quick revision notes for efficient preparation'
            ],
            highlights: [
                'High percentage of students in top 1000 ranks',
                'Simplified learning for complex topics',
                'Regular parent-teacher feedback sessions'
            ]
        },
        {
            id: 4,
            title: 'Intermediate MPC',
            category: 'intermediate',
            subtitle: 'Pure Science (MPC)',
            duration: '2 Years',
            batchSize: 'Interactive Class',
            sessions: 'Regular College Hours',
            description: 'Build a solid foundation in Mathematics, Physics, and Chemistry. This program is perfect for students looking to pursue engineering or research-based careers.',
            img: '/banners/IMG_7612.PNG',
            features: [
                'Comprehensive board exam preparation',
                'Conceptual bridge to competitive exams',
                'Lab-integrated learning for Science subjects',
                'Regular academic monitoring & support',
                'Personality development & career guidance'
            ],
            highlights: [
                '100% board exam pass rate',
                'Strong academic foundation for future',
                'Holistic development approach'
            ]
        },
        {
            id: 5,
            title: 'Intermediate BiPC',
            category: 'intermediate',
            subtitle: 'Medical Foundation (BiPC)',
            duration: '2 Years',
            batchSize: 'Intensive Lab Batch',
            sessions: 'Regular College Hours',
            description: 'Focused studies for Biology, Physics, and Chemistry. Ideal for students aiming for careers in Medicine, Biotechnology, or Agriculture.',
            img: '/banners/IMG_7607.PNG',
            features: [
                'Detailed NCERT & State Board alignment',
                'Extensive lab sessions for Botany & Zoology',
                'Weekly cumulative tests for consistent growth',
                'Supportive and experienced faculty',
                'Focus on clear concept visualization'
            ],
            highlights: [
                'Exceptional board results every year',
                'Practical-oriented teaching method',
                'Direct path to NEET preparation'
            ]
        },
        {
            id: 6,
            title: 'Intermediate Tuitions',
            category: 'tuitions',
            subtitle: 'Academic Support (9th-12th)',
            duration: 'Flexible',
            batchSize: 'One-on-One / Micro-Batch',
            sessions: 'Evening Slots',
            description: 'Extra help when you need it. Our tuition programs provide personalized academic support to help students improve their grades and build confidence.',
            img: '/banners/IMG_7615.PNG',
            features: [
                'Subject-specific expert tutors available',
                'Flexible schedules based on student needs',
                'Focus on weak areas and difficult concepts',
                'Regular progress reports for parents',
                'Homework and assignment assistance'
            ],
            highlights: [
                'Measurable improvement in board scores',
                'Individualized learning pace',
                'Stress-free learning environment'
            ]
        }
    ]

    const filteredCourses = selectedCategory === 'all'
        ? courses
        : courses.filter(course => course.category === selectedCategory)

    const categories = [
        { value: 'all', label: 'All Programs' },
        { value: 'medical', label: 'Medical' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'tuitions', label: 'Tuitions' }
    ]

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/banners/IMG_7605.PNG"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Empowering Future Leaders
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                            Comprehensive <span className="text-accent-500">Academic</span> Programs
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-12">
                            From competitive entrances like NEET and JEE to foundational Intermediate coaching,
                            we provide the roadmap to your success.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105">
                                Join Now
                            </Link>
                            <Link href="#programs" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 backdrop-blur-sm transition-all hover:scale-105">
                                Explore Courses
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter Bar */}
            <section id="programs" className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-6">
                <div className="container mx-auto px-6 overflow-x-auto pb-2 sm:pb-0">
                    <div className="flex justify-start sm:justify-center items-center gap-2 sm:gap-4 min-w-max">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${selectedCategory === category.value
                                        ? 'bg-primary-900 text-white shadow-lg'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group flex flex-col"
                            >
                                <div className="relative h-[280px] overflow-hidden">
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <span className="inline-block px-3 py-1 rounded-lg bg-accent-500 text-white text-[10px] font-bold uppercase tracking-widest mb-2">
                                            {course.subtitle}
                                        </span>
                                        <h3 className="text-3xl font-bold">{course.title}</h3>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                        {course.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100 mb-8">
                                        <div className="text-center">
                                            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Duration</div>
                                            <div className="text-sm font-bold text-primary-900">{course.duration}</div>
                                        </div>
                                        <div className="text-center border-x border-slate-100 px-2">
                                            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Batch Size</div>
                                            <div className="text-sm font-bold text-primary-900">{course.batchSize}</div>
                                        </div>
                                        <div className="text-center text-slate-400">
                                            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Sessions</div>
                                            <div className="text-sm font-bold text-primary-900">{course.sessions}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent-600">Program Inclusions</h4>
                                        <div className="grid gap-3">
                                            {course.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <FaCheckCircle className="text-green-500 flex-shrink-0 text-sm" />
                                                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/contact"
                                            className="flex-1 px-6 py-4 bg-primary-900 text-white font-bold rounded-xl text-center hover:bg-primary-800 transition-colors shadow-lg shadow-primary-900/20"
                                        >
                                            Apply Now
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="flex-1 px-6 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl text-center hover:bg-slate-200 transition-colors"
                                        >
                                            Download Brochure
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Minimal */}
            <section className="py-24 bg-primary-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-20 tracking-tight">
                        The Inspire <span className="text-accent-500">Methodology</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-500/30">
                                <FaUsers className="text-white text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Focused Attention</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Small batch sizes allow our expert mentors to track every student's daily progress and identify growth areas instantly.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
                                <FaBook className="text-white text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Smart Curriculum</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Our syllabus is updated weekly to match the evolving trends of NEET, JEE, and EAMCET examinations for maximum edge.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                                <FaArrowRight className="text-white text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Join the academy in Vijayawada with a consistent track record of securing top ranks in professional entrance exams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                            Ready to claim your <span className="text-accent-500">Success?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-12 font-medium">
                            Enroll today and take the first step toward a bright professional future in Medicine, Engineering, or Commerce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="px-12 py-5 bg-accent-500 text-white font-extrabold rounded-2xl text-xl shadow-2xl hover:bg-accent-600 transition-all hover:scale-105">
                                Enroll Now
                            </Link>
                            <Link href="/admissions" className="px-12 py-5 bg-primary-900 text-white font-extrabold rounded-2xl text-xl shadow-2xl hover:bg-primary-800 transition-all hover:scale-105">
                                Admission Info
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
