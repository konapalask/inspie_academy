import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMinus } from 'react-icons/fa'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'classroom', label: 'Classroom' },
    { value: 'events', label: 'Events' },
    { value: 'facilities', label: 'Facilities' }
  ]

  const images = [
    { id: 1, category: 'classroom', title: 'Interactive Learning Session', description: 'Students engaged in problem-solving' },
    { id: 2, category: 'classroom', title: 'Advanced Physics Class', description: 'Expert faculty demonstration' },
    { id: 3, category: 'events', title: 'Annual Achievement Ceremony', description: 'Celebrating student success' },
    { id: 4, category: 'events', title: 'Orientation Program 2024', description: 'Welcome to new batch' },
    { id: 5, category: 'facilities', title: 'Modern Library', description: 'Comprehensive resource center' },
    { id: 6, category: 'facilities', title: 'Science Laboratory', description: 'State-of-the-art equipment' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Gallery</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Our <span className="font-semibold">Campus</span>
              <br />
              Experience
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Explore our facilities, classroom environments, and vibrant campus culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                  selectedCategory === category.value
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-black'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-200 aspect-[4/3] mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500 text-sm">
                    Image {image.id}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-black mb-2 tracking-tight">{image.title}</h3>
                <p className="text-gray-600 font-light">{image.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
