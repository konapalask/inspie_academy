import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaTrophy, 
  FaAward, 
  FaStar, 
  FaGraduationCap, 
  FaUniversity, 
  FaQuoteLeft, 
  FaPlay, 
  FaDownload, 
  FaShare, 
  FaHeart, 
  FaUsers, 
  FaRocket, 
  FaChartLine, 
  FaMedal, 
  FaCertificate, 
  FaCalendarAlt, 
  FaEye,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

const ResultCard = ({ result, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative">
      <img 
        src={result.image} 
        alt={result.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {result.exam}
      </div>
      <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
        <p className="text-white text-sm font-semibold">{result.rank}</p>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{result.name}</h3>
      <p className="text-primary-600 font-semibold mb-3">{result.college}</p>
      <p className="text-gray-600 text-sm mb-4">{result.achievement}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <FaCalendarAlt className="mr-1" />
          <span>{result.year}</span>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
            <FaShare className="text-xs" />
          </button>
          <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
            <FaHeart className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
)

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-start gap-4 mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-primary-600">{testimonial.course}</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`text-xs ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>
      </div>
    </div>
    
    <div className="relative">
      <FaQuoteLeft className="text-primary-200 text-2xl absolute -top-2 -left-2" />
      <p className="text-gray-600 italic pl-6">{testimonial.quote}</p>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-200">
      <p className="text-sm text-gray-500">{testimonial.achievement}</p>
    </div>
  </motion.div>
)

const StatCard = ({ icon: Icon, number, label, color, description }) => (
  <motion.div
    className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 hover:shadow-xl transition-all duration-300 card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
      <Icon size={24} />
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600 font-semibold mb-1">{label}</div>
    <div className="text-sm text-gray-500">{description}</div>
  </motion.div>
)

const VideoCard = ({ video, index }) => (
  <motion.div
    className="relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative">
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <FaPlay className="text-primary-600 ml-1" />
        </button>
      </div>
      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {video.duration}
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{video.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <FaEye className="mr-1" />
          <span>{video.views} views</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <FaCalendarAlt className="mr-1" />
          <span>{video.date}</span>
        </div>
      </div>
    </div>
  </motion.div>
)

export default function Results(){
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Results', icon: FaTrophy },
    { id: 'jee', name: 'JEE Mains', icon: FaRocket },
    { id: 'eamcet', name: 'EAMCET', icon: FaAward },
    { id: 'intermediate', name: 'Intermediate', icon: FaGraduationCap }
  ]

  const results = [
    {
      name: "Ananya",
      exam: "NEET",
      rank: "AIR 214",
      college: "AIIMS Delhi - MBBS",
      achievement: "Secured admission in AIIMS Delhi with excellent performance in all subjects. Our NEET coaching helped her achieve this remarkable success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80",
      year: "2025",
      category: "jee"
    },
    {
      name: "Pranav",
      exam: "JEE Main",
      rank: "99.85%",
      college: "IIT Delhi - Computer Science",
      achievement: "Top performer in JEE Main with exceptional scores. Our JEE coaching program helped him achieve this remarkable success.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&q=80",
      year: "2023",
      category: "eamcet"
    },
    {
      name: "Amit Singh",
      exam: "Intermediate",
      rank: "95%",
      college: "Andhra University",
      achievement: "Excellent performance in Intermediate with distinction in all subjects",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&q=80",
      year: "2023",
      category: "intermediate"
    },
    {
      name: "Sneha Reddy",
      exam: "JEE Mains",
      rank: "AIR 234",
      college: "IIT Bombay - Mechanical",
      achievement: "Outstanding performance in JEE Mains with strong foundation in Mathematics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&q=80",
      year: "2023",
      category: "jee"
    },
    {
      name: "Vikram Patel",
      exam: "EAMCET",
      rank: "Rank 156",
      college: "Osmania University - CSE",
      achievement: "Consistent performer with excellent problem-solving skills",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&q=80",
      year: "2023",
      category: "eamcet"
    },
    {
      name: "Anjali Mehta",
      exam: "Intermediate",
      rank: "98%",
      college: "Delhi University",
      achievement: "Top scorer in Intermediate with perfect scores in Mathematics and Physics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&q=80",
      year: "2023",
      category: "intermediate"
    }
  ]

  const testimonials = [
    {
      name: "Rahul Kumar",
      course: "JEE Mains",
      rating: 5,
      quote: "Andhra Inspire Academy transformed my approach to learning. The faculty's personalized attention and innovative teaching methods helped me achieve my dream of getting into IIT Delhi.",
      achievement: "AIR 156 in JEE Mains 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Priya Sharma",
      course: "EAMCET",
      rating: 5,
      quote: "The comprehensive study material and regular mock tests at Andhra Inspire Academy prepared me thoroughly for EAMCET. I couldn't have achieved this success without their guidance.",
      achievement: "Rank 89 in EAMCET 2023",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Amit Singh",
      course: "Intermediate",
      rating: 5,
      quote: "The small batch sizes and individual attention at Andhra Inspire Academy made all the difference. The faculty helped me understand concepts clearly and build confidence.",
      achievement: "95% in Intermediate 2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Sneha Reddy",
      course: "JEE Mains",
      rating: 5,
      quote: "The doubt-clearing sessions and personalized study plans at Andhra Inspire Academy were instrumental in my success. The faculty's dedication is truly remarkable.",
      achievement: "AIR 234 in JEE Mains 2023",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
    }
  ]

  const videos = [
    {
      title: "Success Story: Rahul's Journey to IIT",
      description: "Watch how Rahul achieved AIR 156 in JEE Mains with our guidance",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80",
      duration: "5:30",
      views: "2.5K",
      date: "Dec 15, 2023"
    },
    {
      title: "EAMCET Topper Interview",
      description: "Priya shares her preparation strategy and tips for EAMCET success",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&q=80",
      duration: "8:45",
      views: "1.8K",
      date: "Dec 12, 2023"
    },
    {
      title: "Faculty Teaching Methodology",
      description: "Our expert faculty explains the teaching approach that leads to success",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&q=80",
      duration: "12:20",
      views: "3.2K",
      date: "Dec 10, 2023"
    }
  ]

  const filteredResults = selectedCategory === 'all' 
    ? results 
    : results.filter(result => result.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Best Institute for Intermediate Students - Success Stories & Results</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
          Our intermediate students' success stories are our greatest achievements. Over the past 13+ years, Inspire Academy has helped 10,000+ Class 11 & 12 students secure admissions in top medical and engineering colleges across India with an 85% success rate. The secret lies in our integrated test system, active learning modules, and personalized mentor support for intermediate students.
        </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaTrophy className="inline mr-2" />
                Top Ranks
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaAward className="inline mr-2" />
                IIT Admissions
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaStar className="inline mr-2" />
                Success Rate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              icon={FaTrophy} 
              number="90%" 
              label="Success Rate" 
              color="bg-green-600"
              description="Students achieving their goals"
            />
            <StatCard 
              icon={FaAward} 
              number="200+" 
              label="IIT Admissions" 
              color="bg-purple-600"
              description="Students in top IITs"
            />
            <StatCard 
              icon={FaMedal} 
              number="500+" 
              label="Top Ranks" 
              color="bg-orange-600"
              description="In various competitive exams"
            />
            <StatCard 
              icon={FaUsers} 
              number="1000+" 
              label="Successful Students" 
              color="bg-blue-600"
              description="Achieved their dreams"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse by Exam</h2>
            <p className="text-lg text-gray-600">View results by examination type</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Achievements</h2>
            <p className="text-xl text-gray-600">Celebrating our students' success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResults.map((result, index) => (
              <ResultCard key={result.name} result={result} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Testimonials</h2>
            <p className="text-xl text-gray-600">Hear from our successful students</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Watch our students share their journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={video.title} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Follow Our Success</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest achievements</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
              Facebook
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
              Twitter
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              WhatsApp
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
              Instagram
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
              LinkedIn
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Be Our Next Success Story</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who achieved their dreams with Andhra Inspire Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
