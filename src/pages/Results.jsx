import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMinus, FaTrophy, FaMedal } from 'react-icons/fa'

export default function Results() {
  const [selectedYear, setSelectedYear] = useState('2024')

  const toppers = [
    {
      year: '2024',
      students: [
        { name: 'Rahul Kumar', exam: 'JEE Main', rank: 'AIR 156', college: 'IIT Delhi', stream: 'Computer Science' },
        { name: 'Priya Sharma', exam: 'NEET', rank: 'AIR 892', college: 'AIIMS Delhi', stream: 'Medicine' },
        { name: 'Amit Singh', exam: 'EAMCET', rank: 'State Rank 89', college: 'JNTU Kakinada', stream: 'CSE' },
        { name: 'Sneha Reddy', exam: 'JEE Advanced', rank: 'AIR 2,450', college: 'IIT Bombay', stream: 'Mechanical' },
        { name: 'Karthik Rao', exam: 'NEET', rank: 'AIR 1,234', college: 'AIIMS', stream: 'Medicine' },
        { name: 'Divya Patel', exam: 'EAMCET', rank: 'State Rank 145', college: 'NIT Warangal', stream: 'ECE' }
      ]
    },
    {
      year: '2023',
      students: [
        { name: 'Ananya Gupta', exam: 'JEE Main', rank: 'AIR 234', college: 'IIT Madras', stream: 'Electrical' },
        { name: 'Rohan Verma', exam: 'NEET', rank: 'AIR 678', college: 'AIIMS', stream: 'Medicine' },
        { name: 'Meera Shah', exam: 'EAMCET', rank: 'State Rank 67', college: 'JNTU', stream: 'IT' },
        { name: 'Arjun Kumar', exam: 'JEE Advanced', rank: 'AIR 1,890', college: 'IIT Kharagpur', stream: 'Civil' },
        { name: 'Lakshmi Reddy', exam: 'NEET', rank: 'AIR 2,100', college: 'JIPMER', stream: 'Medicine' },
        { name: 'Sai Krishna', exam: 'EAMCET', rank: 'State Rank 198', college: 'OU', stream: 'CSE' }
      ]
    }
  ]

  const statistics = [
    { label: 'Total Selections', value: '2,850+', year: '2024' },
    { label: 'Top 100 Ranks', value: '45', year: '2024' },
    { label: 'IIT Selections', value: '128', year: '2024' },
    { label: 'AIIMS Selections', value: '76', year: '2024' }
  ]

  const achievements = [
    {
      title: 'National Recognition',
      description: 'Consistently producing top rankers in NEET and JEE examinations across the nation'
    },
    {
      title: 'Premier Institutions',
      description: 'Students admitted to IITs, AIIMs, NITs, and other prestigious colleges'
    },
    {
      title: 'Success Rate',
      description: 'Maintaining 85% success rate in competitive examinations annually'
    },
    {
      title: 'State Excellence',
      description: 'Leading coaching institute for EAMCET with highest number of top rankers'
    }
  ]

  const currentYearData = toppers.find(y => y.year === selectedYear)

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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Results</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Our <span className="font-semibold">Success</span>
              <br />
              Stories
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Celebrating the achievements of our students who excel in competitive examinations and 
              secure admissions to premier institutions nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-light text-black mb-3">{stat.value}</div>
                <div className="text-xs tracking-[0.15em] uppercase text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="flex justify-center gap-6">
            {toppers.map((yearData) => (
              <button
                key={yearData.year}
                onClick={() => setSelectedYear(yearData.year)}
                className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                  selectedYear === yearData.year
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-black'
                }`}
              >
                {yearData.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers List */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Top Rankers</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-5xl font-light text-black tracking-tight">
              {selectedYear} <span className="font-semibold">Achievers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentYearData?.students.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-10 hover:border-black transition-all duration-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaTrophy className="text-2xl text-black" />
                  <span className="text-xs tracking-[0.15em] uppercase text-gray-500">{student.exam}</span>
                </div>

                <h3 className="text-2xl font-medium text-black mb-2 tracking-tight">{student.name}</h3>
                <div className="text-3xl font-light text-black mb-6">{student.rank}</div>

                <div className="pt-6 border-t border-gray-200 space-y-2">
                  <div className="text-sm text-gray-700 font-light">{student.college}</div>
                  <div className="text-xs tracking-wider uppercase text-gray-500">{student.stream}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Achievements */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Milestones</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-5xl font-light text-black tracking-tight">
              Our <span className="font-semibold">Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <FaMedal className="text-4xl text-black mx-auto mb-6" />
                <h3 className="text-xl font-medium text-black mb-4 tracking-tight uppercase">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
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
              Your Success <span className="font-semibold">Awaits</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Join the legacy of achievers and begin your journey towards excellence
            </p>
            
            <a
              href="/admissions"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-500"
            >
              Enroll Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
