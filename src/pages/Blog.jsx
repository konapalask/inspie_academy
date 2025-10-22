import React from 'react'
import { motion } from 'framer-motion'
import { FaMinus, FaArrowRight, FaClock, FaUser } from 'react-icons/fa'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Effective Study Strategies for NEET 2025',
      excerpt: 'Discover proven techniques to maximize your NEET preparation and achieve top ranks in the upcoming examination.',
      author: 'Inspire Academy',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'NEET'
    },
    {
      id: 2,
      title: 'JEE Main 2025: Complete Preparation Guide',
      excerpt: 'A comprehensive roadmap covering all aspects of JEE Main preparation, from syllabus coverage to exam strategy.',
      author: 'Inspire Academy',
      date: 'January 10, 2025',
      readTime: '8 min read',
      category: 'JEE'
    },
    {
      id: 3,
      title: 'Time Management Tips for Competitive Exams',
      excerpt: 'Master the art of time management to balance board exams and competitive examination preparation effectively.',
      author: 'Inspire Academy',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Study Tips'
    },
    {
      id: 4,
      title: 'Understanding EAMCET Examination Pattern',
      excerpt: 'Detailed analysis of EAMCET syllabus, marking scheme, and effective strategies to secure top ranks.',
      author: 'Inspire Academy',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'EAMCET'
    },
    {
      id: 5,
      title: 'Building Strong Foundation in Physics',
      excerpt: 'Essential concepts and problem-solving approaches for excelling in Physics for both JEE and NEET.',
      author: 'Inspire Academy',
      date: 'December 20, 2024',
      readTime: '10 min read',
      category: 'Physics'
    },
    {
      id: 6,
      title: 'Chemistry: From Basics to Advanced',
      excerpt: 'Comprehensive guide to mastering Chemistry concepts for competitive examinations.',
      author: 'Inspire Academy',
      date: 'December 15, 2024',
      readTime: '9 min read',
      category: 'Chemistry'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Blog</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Insights & <span className="font-semibold">Articles</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Expert guidance, study tips, and educational insights to support your academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-200 aspect-[16/10] mb-8 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500 text-sm transition-transform duration-700 group-hover:scale-105">
                    Blog {post.id}
                  </div>
                </div>

                {/* Category */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <FaMinus className="text-xs" />
                  <span className="text-xs tracking-[0.2em] uppercase text-gray-500">{post.category}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-medium text-black mb-4 tracking-tight group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-xs text-gray-500 mb-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-xs" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-xs" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <button className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-black hover:gap-4 transition-all duration-300">
                  Read Article
                  <FaArrowRight className="text-xs" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-light mb-8 tracking-tight leading-tight">
              Stay <span className="font-semibold">Updated</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Subscribe to receive the latest educational insights and study tips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors font-light"
              />
              <button className="bg-white text-black px-10 py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-100 transition-all duration-500 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
