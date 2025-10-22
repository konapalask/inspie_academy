import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'Admissions',
      questions: [
        {
          question: 'What is the admission process?',
          answer: 'The admission process involves completing an online application form, document verification, counseling session, fee payment, and orientation program. Our admissions team will guide you through each step.'
        },
        {
          question: 'When do new batches start?',
          answer: 'New batches commence in June and January each year. We recommend early enrollment to secure your preferred batch timing and ensure comprehensive preparation.'
        },
        {
          question: 'What documents are required for admission?',
          answer: 'Required documents include recent photographs, academic transcripts, transfer certificate, identity proof (Aadhar/Passport), parent identification, and address proof.'
        }
      ]
    },
    {
      category: 'Programs',
      questions: [
        {
          question: 'What courses do you offer?',
          answer: 'We offer comprehensive coaching for NEET, JEE Main & Advanced, EAMCET, and Foundation programs for classes 9-10. Each program is designed with expert faculty and proven methodologies.'
        },
        {
          question: 'What is the batch size?',
          answer: 'We maintain small batch sizes of maximum 25 students to ensure personalized attention and effective learning. This allows our faculty to address individual student needs.'
        },
        {
          question: 'Are study materials provided?',
          answer: 'Yes, comprehensive study materials, practice papers, and mock test series are provided to all enrolled students as part of the program fee.'
        }
      ]
    },
    {
      category: 'Fees & Payment',
      questions: [
        {
          question: 'What is the fee structure?',
          answer: 'Fee structure varies by program: NEET (₹75,000/year), JEE (₹80,000/year), EAMCET (₹60,000/year), Foundation (₹50,000/year). Installment options are available.'
        },
        {
          question: 'Are installment payments available?',
          answer: 'Yes, we offer flexible installment payment options to make quality education accessible. Contact our admissions office for detailed payment plans.'
        },
        {
          question: 'Is there a refund policy?',
          answer: 'Refund policies are subject to terms and conditions. Please refer to the enrollment agreement or contact our admissions team for specific details.'
        }
      ]
    },
    {
      category: 'Faculty & Teaching',
      questions: [
        {
          question: 'Who are the faculty members?',
          answer: 'Our faculty comprises highly qualified educators with extensive experience in competitive examination coaching and proven track records of producing top rankers.'
        },
        {
          question: 'How are classes conducted?',
          answer: 'Classes are conducted through a hybrid model combining traditional classroom instruction with modern digital resources, ensuring comprehensive learning experience.'
        },
        {
          question: 'Are doubt-clearing sessions provided?',
          answer: 'Yes, regular doubt-clearing sessions are conducted where students can clarify concepts and receive personalized guidance from faculty members.'
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">FAQ</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Frequently Asked <span className="font-semibold">Questions</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Find answers to common questions about our programs, admissions, and academic offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto space-y-20">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-12">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <FaMinus className="text-xs" />
                    <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500">{category.category}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`
                    
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: questionIndex * 0.1 }}
                        className="border-b border-gray-200 last:border-0"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                        >
                          <h3 className="text-xl font-medium text-black tracking-tight group-hover:text-gray-600 transition-colors">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                            {isOpen ? (
                              <FaMinus className="text-xs" />
                            ) : (
                              <FaPlus className="text-xs" />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6 pr-12">
                                <p className="text-gray-600 leading-relaxed font-light">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
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
              Still Have <span className="font-semibold">Questions?</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-500"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
