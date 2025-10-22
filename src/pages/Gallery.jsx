import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaImages, 
  FaPlay, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaTrophy, 
  FaGraduationCap, 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaAward, 
  FaHeart, 
  FaShare, 
  FaDownload, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaEye,
  FaClock,
  FaTag
} from 'react-icons/fa'

const GalleryItem = ({ item, index, onClick }) => (
  <motion.div
    className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    onClick={() => onClick(item)}
  >
    <div className="relative">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        {item.type === 'video' ? (
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <FaPlay className="text-primary-600 ml-1" />
          </div>
        ) : (
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <FaEye className="text-primary-600" />
          </div>
        )}
      </div>
      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {item.category}
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
        {item.type === 'video' ? <FaPlay className="text-primary-600" /> : <FaImages className="text-primary-600" />}
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <FaCalendarAlt />
          <span>{item.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaUsers />
          <span>{item.participants}</span>
        </div>
      </div>
    </div>
  </motion.div>
)

const Modal = ({ item, isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <FaTimes />
            </button>
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <FaChevronLeft />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <FaChevronRight />
              </button>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUsers />
                <span>{item.participants}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaTag />
                <span>{item.category}</span>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h1>
            <p className="text-gray-600 mb-6">{item.description}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaHeart className="mr-1" />
                  Like
                </button>
                <button className="text-gray-400 hover:text-primary-600 transition-colors">
                  <FaShare className="mr-1" />
                  Share
                </button>
                <button className="text-gray-400 hover:text-green-600 transition-colors">
                  <FaDownload className="mr-1" />
                  Download
                </button>
              </div>
              <button
                onClick={onClose}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const StatCard = ({ icon: Icon, number, label, color }) => (
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
    <div className="text-gray-600">{label}</div>
  </motion.div>
)

export default function Gallery(){
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = [
    { id: 'all', name: 'All Events', icon: FaImages },
    { id: 'classroom', name: 'Classroom', icon: FaChalkboardTeacher },
    { id: 'events', name: 'Events', icon: FaCalendarAlt },
    { id: 'achievements', name: 'Achievements', icon: FaTrophy },
    { id: 'celebrations', name: 'Celebrations', icon: FaAward }
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Interactive Physics Lab Session",
      description: "Students conducting experiments in our state-of-the-art physics laboratory",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80",
      category: "Classroom",
      date: "Dec 15, 2023",
      participants: "25 Students",
      type: "image",
      categoryId: "classroom"
    },
    {
      id: 2,
      title: "JEE Mains Mock Test",
      description: "Students taking a comprehensive mock test to assess their preparation",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
      category: "Events",
      date: "Dec 12, 2023",
      participants: "50 Students",
      type: "image",
      categoryId: "events"
    },
    {
      id: 3,
      title: "Annual Science Exhibition",
      description: "Students showcasing their innovative projects and experiments",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
      category: "Events",
      date: "Dec 10, 2023",
      participants: "100+ Students",
      type: "video",
      categoryId: "events"
    },
    {
      id: 4,
      title: "Topper Felicitation Ceremony",
      description: "Celebrating our students who achieved top ranks in various competitive exams",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      category: "Achievements",
      date: "Dec 8, 2023",
      participants: "30 Students",
      type: "image",
      categoryId: "achievements"
    },
    {
      id: 5,
      title: "Chemistry Practical Session",
      description: "Students learning organic chemistry reactions in our well-equipped lab",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80",
      category: "Classroom",
      date: "Dec 5, 2023",
      participants: "20 Students",
      type: "image",
      categoryId: "classroom"
    },
    {
      id: 6,
      title: "Mathematics Problem Solving Workshop",
      description: "Interactive session on advanced problem-solving techniques",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop&q=80",
      category: "Classroom",
      date: "Dec 3, 2023",
      participants: "35 Students",
      type: "video",
      categoryId: "classroom"
    },
    {
      id: 7,
      title: "Annual Day Celebration",
      description: "Students and faculty celebrating another successful academic year",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      category: "Celebrations",
      date: "Nov 30, 2023",
      participants: "200+ People",
      type: "image",
      categoryId: "celebrations"
    },
    {
      id: 8,
      title: "EAMCET Preparation Seminar",
      description: "Expert faculty sharing tips and strategies for EAMCET success",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
      category: "Events",
      date: "Nov 28, 2023",
      participants: "80 Students",
      type: "video",
      categoryId: "events"
    },
    {
      id: 9,
      title: "Student Achievement Awards",
      description: "Recognizing outstanding performance and dedication of our students",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      category: "Achievements",
      date: "Nov 25, 2023",
      participants: "50 Students",
      type: "image",
      categoryId: "achievements"
    },
    {
      id: 10,
      title: "Doubt Clearing Session",
      description: "One-on-one interaction between students and faculty for concept clarification",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
      category: "Classroom",
      date: "Nov 22, 2023",
      participants: "15 Students",
      type: "image",
      categoryId: "classroom"
    },
    {
      id: 11,
      title: "Cultural Festival",
      description: "Students showcasing their talents in various cultural activities",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      category: "Celebrations",
      date: "Nov 20, 2023",
      participants: "150+ People",
      type: "video",
      categoryId: "celebrations"
    },
    {
      id: 12,
      title: "Library Study Session",
      description: "Students utilizing our extensive library resources for self-study",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80",
      category: "Classroom",
      date: "Nov 18, 2023",
      participants: "40 Students",
      type: "image",
      categoryId: "classroom"
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.categoryId === selectedCategory)

  const handleItemClick = (item) => {
    const index = filteredItems.findIndex(i => i.id === item.id)
    setCurrentIndex(index)
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      setSelectedItem(filteredItems[newIndex])
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      setSelectedItem(filteredItems[newIndex])
    }
  }

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
            <h1 className="text-5xl font-bold mb-6">Gallery & Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore our vibrant campus life, academic activities, and special events. 
              See how we create an engaging learning environment for our students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaImages className="inline mr-2" />
                Photo Gallery
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaPlay className="inline mr-2" />
                Video Content
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaCalendarAlt className="inline mr-2" />
                Events
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Campus Life</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our vibrant community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              icon={FaImages} 
              number="500+" 
              label="Photos & Videos" 
              color="bg-blue-600" 
            />
            <StatCard 
              icon={FaCalendarAlt} 
              number="50+" 
              label="Events Annually" 
              color="bg-green-600" 
            />
            <StatCard 
              icon={FaUsers} 
              number="200+" 
              label="Active Students" 
              color="bg-purple-600" 
            />
            <StatCard 
              icon={FaTrophy} 
              number="100+" 
              label="Achievements" 
              color="bg-orange-600" 
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Explore different aspects of our academy life</p>
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

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Campus Gallery</h2>
            <p className="text-xl text-gray-600">Moments that capture our academic excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} onClick={handleItemClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Highlights</h2>
            <p className="text-xl text-gray-600">Latest events and activities at our academy</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers />
                      <span>{item.participants}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-4">Be Part of Our Story</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our vibrant community and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Join Our Academy
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Follow Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < filteredItems.length - 1}
        />
      )}
    </div>
  )
}
