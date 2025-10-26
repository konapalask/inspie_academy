import React from 'react'
import { motion } from 'framer-motion'
import { FaMinus, FaArrowRight, FaClock, FaUser } from 'react-icons/fa'
import Card3D from '../components/Card3D'
import AnimatedSection from '../components/AnimatedSection'
import { PrimaryButton } from '../components/Button'

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
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 three-d-container">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <Card3D className="group card-3d">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 gradient-overlay">
                    {/* Image Placeholder */}
                    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 aspect-[16/10] overflow-hidden relative">
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl layer-3">
                          <FaBook className="text-4xl text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Category */}
                      <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-xs tracking-[0.2em] uppercase text-blue-600 font-bold">{post.category}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors layer-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-600 leading-relaxed font-medium mb-6 layer-1">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6 text-xs text-slate-500 mb-6 pt-6 border-t border-blue-200">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaClock className="text-blue-600 text-xs" />
                          </div>
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <FaUser className="text-indigo-600 text-xs" />
                          </div>
                          <span className="font-medium">{post.author}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <button className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-bold text-blue-600 hover:gap-4 transition-all duration-300">
                        Read Article
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </article>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
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
                className="flex-1 px-6 py-5 bg-transparent border-2 border-white/40 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors font-medium rounded-xl"
              />
              <PrimaryButton onClick={() => {}} icon={false} className="whitespace-nowrap">
                Subscribe
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
