import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaBookOpen, FaTrophy, FaUsers, FaRocket, FaStar, FaRobot } from 'react-icons/fa'
import lottie from 'lottie-web'
import OptimizedThreeBackground from '../components/OptimizedThreeBackground'
import ScrollAnimation from '../components/ScrollAnimation'
import AnimatedStats from '../components/AnimatedStats'
import CinematicParticlesComponent from '../components/CinematicParticles'
import ThreeDHero from '../components/ThreeDHero'
import { FeatureCard, TestimonialCard, FloatingActionButton } from '../components/ThreeDCard'
import ExamBanner from '../components/ExamBanner'
import AIChatbot from '../components/AIChatbot'

export default function Home(){
  const animRef = useRef(null)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [stats, setStats] = useState({
    students: 10000,
    success: 85,
    courses: 10,
    years: 13
  })

  useEffect(() => {

    // Animate statistics on load
    const animateStats = () => {
      const targetStats = { students: 10000, success: 85, courses: 10, years: 13 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        setStats({
          students: Math.floor(targetStats.students * progress),
          success: Math.floor(targetStats.success * progress),
          courses: Math.floor(targetStats.courses * progress),
          years: Math.floor(targetStats.years * progress)
        })
        if (currentStep >= steps) clearInterval(timer)
      }, stepDuration)
    }

    setTimeout(animateStats, 500)

    // Lottie animation setup
    if (animRef.current) {
    const anim = lottie.loadAnimation({
      container: animRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
        // You can add a lottie JSON file here
    })
    return () => anim.destroy()
    }
  }, [])

  const features = [
    { icon: FaBookOpen, title: "Comprehensive Courses", desc: "NEET, JEE Mains, EAMCET, Intermediate" },
    { icon: FaTrophy, title: "Proven Results", desc: "85% Success Rate with Top Ranks" },
    { icon: FaUsers, title: "Personal Attention", desc: "Small Batch Sizes (Max 25 students)" },
    { icon: FaGraduationCap, title: "Quality Education", desc: "World-class coaching and mentorship" }
  ]

  const testimonials = [
    {
      name: "Rahul Kumar",
      course: "JEE Mains",
      score: "AIR 156",
      quote: "Andhra Inspire Academy helped me achieve my dream of getting into IIT Delhi. The faculty's personalized approach made all the difference!"
    },
    {
      name: "Priya Sharma",
      course: "EAMCET",
      score: "Rank 89",
      quote: "The comprehensive study material and regular mock tests prepared me thoroughly for EAMCET. I couldn't have achieved this success without their guidance."
    },
    {
      name: "Amit Singh",
      course: "Intermediate",
      score: "95%",
      quote: "Best coaching institute in the city. The small batch sizes and individual attention helped me excel in all subjects."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Exam Banner */}
      <ExamBanner />

      {/* Hero Section */}
      <section className="hero-bg relative min-h-screen flex items-center overflow-hidden">
        {/* Simplified 3D Background - Mobile Optimized */}
        <div className="hidden lg:block">
          <ThreeDHero className="opacity-40" />
        </div>
        <OptimizedThreeBackground className="opacity-20 sm:opacity-30" />
        
        {/* Simplified Floating Elements - Hidden on Mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <motion.div
            className="absolute top-20 left-10 w-12 h-12 bg-white/5 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-8 h-8 bg-white/5 rounded-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white order-2 lg:order-1"
            >
              <motion.h1 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-shadow leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Inspire Academy – Best Institute for Intermediate Students | Top Coaching for Class 11 & 12
              </motion.h1>
              
              <motion.p 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 text-blue-100 leading-relaxed px-2 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Best institute for intermediate students in Andhra Pradesh. Expert coaching for Class 11 & 12 students with personalized guidance, live interactive classes, and proven results. Trusted by 10,000+ intermediate students for NEET, JEE, and EAMCET preparation with 85% success rate.
              </motion.p>

              <motion.div 
                className="flex flex-col gap-3 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  to="/admissions" 
                  className="btn-primary bg-white text-primary-600 hover:bg-blue-50 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-xl shadow-2xl text-center min-h-[48px] flex items-center justify-center"
                >
                  <FaRocket className="inline mr-2 text-sm sm:text-base" />
                  <span className="hidden sm:inline">Enroll Now for Upcoming Batch</span>
                  <span className="sm:hidden">Enroll Now</span>
                </Link>
                <button
                  onClick={() => setIsChatbotOpen(true)}
                  className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-xl text-center min-h-[48px] flex items-center justify-center"
                >
                  <FaRobot className="inline mr-2 text-sm sm:text-base" />
                  <span className="hidden sm:inline">AI Course Recommendation</span>
                  <span className="sm:hidden">AI Enquiry</span>
                </button>
              </motion.div>

              {/* Animated Statistics - Mobile Responsive */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-300 mb-1">
                    {stats.students}+
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">Students Trained</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-300 mb-1">
                    {stats.success}%
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">Success Rate</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-300 mb-1">
                    {stats.courses}
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">Courses Offered</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-orange-300 mb-1">
                    {stats.years}+
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animation */}
            <motion.div 
              className="flex items-center justify-center mt-4 lg:mt-0 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div ref={animRef} style={{width: '100%', maxWidth: 500, height: 200}} aria-hidden="true" className="w-full max-w-xs sm:max-w-sm lg:max-w-lg">
                  {/* Lottie animation will appear here */}
                </div>
                {/* Fallback SVG if no Lottie animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border-4 border-white/20 rounded-full flex items-center justify-center"
                  >
                    <FaGraduationCap size={40} className="text-white/60 sm:w-12 sm:h-12 lg:w-20 lg:h-20" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
            </div>
      </section>

      {/* Features Section */}
      <ScrollAnimation className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Inspire Academy?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Inspire Academy empowers students to achieve top ranks in NEET, JEE, and EAMCET through advanced learning methods, conceptual clarity, and constant mentorship. Our expert faculty from premier institutes ensure that every student builds strong fundamentals and exam temperament.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.desc}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Success Stories</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Hear from our successful students</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  course={testimonial.course}
                  score={testimonial.score}
                  quote={testimonial.quote}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-600 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -360, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Start Your Success Journey?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Join 10,000+ successful students who achieved their dreams with Inspire Academy. Whether you prepare offline or online, our structured programs guarantee measurable progress week after week. Book your free counseling session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a 
                href="tel:9492664870" 
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg text-center relative group"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="relative z-10">Download 2026 Course Brochure</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link 
                  to="/courses" 
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 text-center block relative group"
                >
                  <span className="relative z-10">Book a Free Demo Session</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-100/20 rounded-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Floating Action Button - Mobile Responsive */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <FloatingActionButton
          icon={FaRocket}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="shadow-2xl w-12 h-12 sm:w-16 sm:h-16"
        />
      </motion.div>
      
      {/* AI Chatbot */}
      <AIChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </div>
  )
}
