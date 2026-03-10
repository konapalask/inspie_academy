"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaUser, FaArrowRight, FaSearch } from 'react-icons/fa'

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const blogPosts = [
        {
            id: 1,
            title: 'Effective Study Strategies for NEET 2025',
            excerpt: 'Discover proven techniques to maximize your NEET preparation and achieve top ranks in the upcoming examination.',
            author: 'Inspire Academy',
            date: 'Jan 15, 2025',
            readTime: '5 min read',
            category: 'NEET',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
        },
        {
            id: 2,
            title: 'JEE Main 2025: Complete Preparation Guide',
            excerpt: 'A comprehensive roadmap covering all aspects of JEE Main preparation, from syllabus coverage to exam strategy.',
            author: 'Inspire Academy',
            date: 'Jan 10, 2025',
            readTime: '8 min read',
            category: 'JEE',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
        },
        {
            id: 3,
            title: 'Time Management Tips for Competitive Exams',
            excerpt: 'Master the art of time management to balance board exams and competitive examination preparation effectively.',
            author: 'Inspire Academy',
            date: 'Jan 5, 2025',
            readTime: '6 min read',
            category: 'Tips',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
        },
        {
            id: 4,
            title: 'Understanding EAMCET Examination Pattern',
            excerpt: 'Detailed analysis of EAMCET syllabus, marking scheme, and effective strategies to secure top ranks.',
            author: 'Inspire Academy',
            date: 'Dec 28, 2024',
            readTime: '7 min read',
            category: 'EAMCET',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
        },
        {
            id: 5,
            title: 'Building Strong Foundation in Physics',
            excerpt: 'Essential concepts and problem-solving approaches for excelling in Physics for both JEE and NEET.',
            author: 'Inspire Academy',
            date: 'Dec 20, 2024',
            readTime: '10 min read',
            category: 'Physics',
            image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80'
        },
        {
            id: 6,
            title: 'Chemistry: From Basics to Advanced',
            excerpt: 'Comprehensive guide to mastering Chemistry concepts for competitive examinations.',
            author: 'Inspire Academy',
            date: 'Dec 15, 2024',
            readTime: '9 min read',
            category: 'Chemistry',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
        }
    ]

    useEffect(() => {
        fetch('/api/videos')
            .then(res => res.json())
            .then(data => {
                setVideos(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load videos:", err);
                setLoading(false);
            });
    }, []);

    const videoPosts = videos.map(v => ({
        id: v.id,
        title: v.title,
        excerpt: v.description,
        author: 'Inspire Academy',
        date: new Date(v.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: 'Video',
        category: 'Video',
        image: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
        youtubeId: v.youtubeId
    }));

    const allPosts = [...videoPosts, ...blogPosts];
    const categories = ['All', 'Video', 'NEET', 'JEE', 'EAMCET', 'Tips', 'Physics', 'Chemistry'];

    const filteredPosts = activeCategory === 'All' ? allPosts : allPosts.filter(post => post.category === activeCategory)

    return (
        <div className="min-h-screen bg-slate-50 pt-20">

            {/* Header Section */}
            <section className="bg-primary-900 border-b-8 border-accent-500 py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Inspire Academy <span className="text-accent-500">Blog</span>
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Stay updated with the latest exam strategies, study tips, and educational news.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

                {/* Top Controls (Search & Filter) */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat
                                    ? 'bg-accent-500 text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent shadow-sm"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    </div>

                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="col-span-full py-20 text-center text-slate-500 font-medium">Loading content...</div>
                    ) : filteredPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
                        >
                            <div className="h-56 sm:h-48 overflow-hidden relative bg-black">
                                {post.youtubeId ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${post.youtubeId}`}
                                        title={post.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                ) : (
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                )}

                                {!post.youtubeId && (
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-900 shadow-sm">
                                        {post.category}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent-500 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                        <FaClock className="text-accent-500" />
                                        <span>{post.date}</span>
                                    </div>
                                    <button className="text-primary-900 font-bold text-sm flex items-center gap-1 group-hover:text-accent-500 transition-colors">
                                        Read More <FaArrowRight className="text-xs transition-transform transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter / CTA underneath */}
                <div className="mt-20 bg-primary-50 rounded-2xl p-8 sm:p-12 text-center border border-primary-100">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">Never Miss an Update</h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">Subscribe to our newsletter to receive the latest study materials, exam notifications, and preparation strategies directly in your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        <button className="bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
