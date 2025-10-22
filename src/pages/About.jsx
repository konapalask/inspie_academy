import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaTrophy, 
  FaUsers, 
  FaChalkboardTeacher,
  FaArrowRight,
  FaMinus,
  FaCheckCircle
} from 'react-icons/fa'

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'Commitment to delivering the highest standards of educational quality and academic achievement'
    },
    {
      title: 'Innovation',
      description: 'Continuous evolution of teaching methodologies to meet modern educational requirements'
    },
    {
      title: 'Integrity',
      description: 'Unwavering dedication to ethical practices and transparent educational processes'
    },
    {
      title: 'Growth',
      description: 'Fostering comprehensive development of students through personalized attention and guidance'
    }
  ]

  const milestones = [
    { year: '2011', event: 'Academy Established', description: 'Foundation of Inspire Academy with a vision for excellence' },
    { year: '2015', event: 'Digital Integration', description: 'Introduction of hybrid learning and digital resources' },
    { year: '2020', event: '5000+ Students', description: 'Milestone achievement in student enrollment' },
    { year: '2024', event: 'Industry Recognition', description: 'Awarded as Top Educational Institute' }
  ]

  const features = [
    'Expert faculty with extensive teaching experience',
    'Comprehensive study materials and resources',
    'Regular performance assessments and analytics',
    'Personalized mentorship and guidance',
    'State-of-the-art infrastructure and facilities',
    'Proven track record of consistent results'
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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">About Us</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Shaping <span className="font-semibold">Tomorrow's</span>
              <br />
              Leaders Today
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Inspire Academy has been at the forefront of competitive examination coaching since 2011, 
              delivering exceptional results through innovative teaching methodologies and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <FaMinus className="text-xs" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Our Mission</span>
                </div>
              
              <h2 className="text-4xl font-light mb-6 tracking-tight">
                Empowering <span className="font-semibold">Academic Success</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                To provide world-class coaching that enables students to achieve their academic aspirations 
                through comprehensive preparation, expert guidance, and continuous support.
              </p>
              
              <p className="text-gray-600 leading-relaxed font-light">
                We strive to create an environment that nurtures intellectual growth, builds confidence, 
                and develops the critical thinking skills necessary for success in competitive examinations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <FaMinus className="text-xs" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Our Vision</span>
              </div>
              
              <h2 className="text-4xl font-light mb-6 tracking-tight">
                Leading <span className="font-semibold">Educational Excellence</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                To be recognized as the premier educational institution for competitive examination preparation, 
                setting industry benchmarks in teaching quality and student achievement.
              </p>
              
              <p className="text-gray-600 leading-relaxed font-light">
                We envision a future where every student has access to exceptional education that transforms 
                their potential into remarkable achievements and sustainable career success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Core Values */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Core Values</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-5xl font-light text-black tracking-tight">
              Our <span className="font-semibold">Principles</span>
            </h2>
                </div>
              
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <h3 className="text-2xl font-medium text-black mb-4 tracking-tight uppercase">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {value.description}
                </p>
                <div className="w-12 h-px bg-black mx-auto mt-6"></div>
              </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Journey</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-5xl font-light text-black tracking-tight">
              Our <span className="font-semibold">Milestones</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-12 pb-16 border-b border-gray-200 mb-16 last:border-0 last:pb-0 last:mb-0"
              >
                <div className="text-4xl font-light text-black min-w-[100px]">{milestone.year}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-black mb-3 tracking-tight">{milestone.event}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{milestone.description}</p>
                </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Why Choose Us */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
              <div className="inline-flex items-center gap-3 mb-8">
                <FaMinus className="text-xs" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Why Choose Us</span>
              </div>
              
              <h2 className="text-5xl font-light mb-8 tracking-tight">
                Comprehensive <span className="font-semibold">Excellence</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed font-light mb-12">
                Our commitment to educational excellence is reflected in every aspect of our operations, 
                from curriculum design to student support services.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
              <motion.div
                key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <FaMinus className="text-xs mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black text-white p-16"
            >
              <div className="space-y-12">
                <div>
                  <div className="text-6xl font-light mb-4">10,000+</div>
                  <div className="text-sm tracking-[0.15em] uppercase text-white/50">Students Trained</div>
                </div>
                <div>
                  <div className="text-6xl font-light mb-4">85%</div>
                  <div className="text-sm tracking-[0.15em] uppercase text-white/50">Success Rate</div>
                </div>
                <div>
                  <div className="text-6xl font-light mb-4">13+</div>
                  <div className="text-sm tracking-[0.15em] uppercase text-white/50">Years Experience</div>
                </div>
              </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-light mb-8 tracking-tight leading-tight">
              Ready to <span className="font-semibold">Begin?</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Join thousands of successful students who chose Inspire Academy for their academic journey
            </p>
            
            <Link 
              to="/admissions"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-500"
            >
                Enroll Now
              <FaArrowRight className="text-xs" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
