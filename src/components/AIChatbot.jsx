import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaUser, FaTimes, FaWhatsapp, FaGraduationCap, FaBookOpen, FaCalculator, FaFlask, FaDna } from 'react-icons/fa'

const AIChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [studentData, setStudentData] = useState({
    name: '',
    class: '',
    subjects: [],
    weakSubjects: [],
    goals: [],
    contact: '',
    email: ''
  })
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 1,
          type: 'bot',
          text: "👋 Hello! I'm your AI study assistant at Inspire Academy. I'll help you identify your weak subjects and suggest the best courses for your success!",
          timestamp: new Date()
        }
      ])
      setCurrentStep(0)
      setStudentData({
        name: '',
        class: '',
        subjects: [],
        weakSubjects: [],
        goals: [],
        contact: '',
        email: ''
      })
    }
  }, [isOpen])

  const conversationFlow = [
    {
      question: "What's your name?",
      type: "text",
      field: "name"
    },
    {
      question: "Which class are you in?",
      type: "select",
      options: ["Class 11", "Class 12", "Dropper", "Other"],
      field: "class"
    },
    {
      question: "What subjects are you studying? (Select all that apply)",
      type: "multi-select",
      options: [
        { value: "Physics", icon: FaCalculator, color: "text-blue-600" },
        { value: "Chemistry", icon: FaFlask, color: "text-green-600" },
        { value: "Biology", icon: FaDna, color: "text-purple-600" },
        { value: "Mathematics", icon: FaCalculator, color: "text-red-600" },
        { value: "English", icon: FaBookOpen, color: "text-indigo-600" }
      ],
      field: "subjects"
    },
    {
      question: "Which subjects do you find most challenging? (Select your weak areas)",
      type: "multi-select",
      options: [
        { value: "Physics", icon: FaCalculator, color: "text-blue-600" },
        { value: "Chemistry", icon: FaFlask, color: "text-green-600" },
        { value: "Biology", icon: FaDna, color: "text-purple-600" },
        { value: "Mathematics", icon: FaCalculator, color: "text-red-600" },
        { value: "English", icon: FaBookOpen, color: "text-indigo-600" }
      ],
      field: "weakSubjects"
    },
    {
      question: "What are your career goals? (Select all that apply)",
      type: "multi-select",
      options: [
        { value: "NEET (Medical)", icon: FaGraduationCap, color: "text-green-600" },
        { value: "JEE (Engineering)", icon: FaCalculator, color: "text-blue-600" },
        { value: "EAMCET", icon: FaBookOpen, color: "text-purple-600" },
        { value: "Board Exams", icon: FaBookOpen, color: "text-orange-600" },
        { value: "Other Competitive Exams", icon: FaGraduationCap, color: "text-indigo-600" }
      ],
      field: "goals"
    },
    {
      question: "What's your contact number?",
      type: "text",
      field: "contact"
    },
    {
      question: "What's your email address?",
      type: "text",
      field: "email"
    }
  ]

  const getCourseRecommendations = () => {
    const { weakSubjects, goals, class: studentClass } = studentData
    
    let recommendations = []
    
    // NEET recommendations
    if (goals.includes("NEET (Medical)")) {
      if (weakSubjects.includes("Biology")) {
        recommendations.push({
          course: "NEET Biology Mastery",
          description: "Intensive Biology coaching with concept clarity and practice",
          duration: "12 months",
          price: "₹15,000"
        })
      }
      if (weakSubjects.includes("Chemistry")) {
        recommendations.push({
          course: "NEET Chemistry Excellence",
          description: "Organic, Inorganic & Physical Chemistry with doubt clearing",
          duration: "12 months", 
          price: "₹12,000"
        })
      }
      if (weakSubjects.includes("Physics")) {
        recommendations.push({
          course: "NEET Physics Foundation",
          description: "Physics fundamentals with problem-solving techniques",
          duration: "12 months",
          price: "₹10,000"
        })
      }
    }
    
    // JEE recommendations
    if (goals.includes("JEE (Engineering)")) {
      if (weakSubjects.includes("Mathematics")) {
        recommendations.push({
          course: "JEE Mathematics Intensive",
          description: "Advanced Mathematics with shortcut techniques",
          duration: "18 months",
          price: "₹18,000"
        })
      }
      if (weakSubjects.includes("Physics")) {
        recommendations.push({
          course: "JEE Physics Mastery",
          description: "Physics concepts with numerical problem solving",
          duration: "18 months",
          price: "₹16,000"
        })
      }
      if (weakSubjects.includes("Chemistry")) {
        recommendations.push({
          course: "JEE Chemistry Advanced",
          description: "Physical, Organic & Inorganic Chemistry mastery",
          duration: "18 months",
          price: "₹14,000"
        })
      }
    }
    
    // EAMCET recommendations
    if (goals.includes("EAMCET")) {
      recommendations.push({
        course: "EAMCET Complete Package",
        description: "Comprehensive EAMCET preparation with all subjects",
        duration: "10 months",
        price: "₹8,000"
      })
    }
    
    // Board exam recommendations
    if (goals.includes("Board Exams")) {
      recommendations.push({
        course: "Board Exam Excellence",
        description: "Class 11 & 12 board exam preparation",
        duration: "8 months",
        price: "₹6,000"
      })
    }
    
    return recommendations.length > 0 ? recommendations : [{
      course: "General Coaching Program",
      description: "Comprehensive coaching for all subjects",
      duration: "12 months",
      price: "₹10,000"
    }]
  }

  const handleUserResponse = (response) => {
    const currentQuestion = conversationFlow[currentStep]
    
    if (currentQuestion.type === "text") {
      setStudentData(prev => ({
        ...prev,
        [currentQuestion.field]: response
      }))
    } else if (currentQuestion.type === "select") {
      setStudentData(prev => ({
        ...prev,
        [currentQuestion.field]: response
      }))
    } else if (currentQuestion.type === "multi-select") {
      setStudentData(prev => ({
        ...prev,
        [currentQuestion.field]: response
      }))
    }

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: Array.isArray(response) ? response.join(', ') : response,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])

    // Check if we've completed all questions
    if (currentStep < conversationFlow.length - 1) {
      setIsTyping(true)
      setTimeout(() => {
        const nextStep = currentStep + 1
        setCurrentStep(nextStep)
        
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          text: conversationFlow[nextStep].question,
          timestamp: new Date(),
          options: conversationFlow[nextStep].options,
          questionType: conversationFlow[nextStep].type
        }
        
        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    } else {
      // Generate recommendations and show results
      setIsTyping(true)
      setTimeout(() => {
        const recommendations = getCourseRecommendations()
        
        const resultMessage = {
          id: messages.length + 2,
          type: 'bot',
          text: `Perfect! Based on your responses, here are my recommendations for you:`,
          timestamp: new Date(),
          recommendations: recommendations,
          studentData: studentData
        }
        
        setMessages(prev => [...prev, resultMessage])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleWhatsAppRedirect = () => {
    const { name, class: studentClass, weakSubjects, goals, contact, email } = studentData
    const recommendations = getCourseRecommendations()
    
    const message = `🎓 *Course Recommendation from Inspire Academy*

*Student Details:*
• Name: ${name}
• Class: ${studentClass}
• Contact: ${contact}
• Email: ${email}

*Weak Subjects:* ${weakSubjects.join(', ')}

*Career Goals:* ${goals.join(', ')}

*Recommended Courses:*
${recommendations.map(rec => `• ${rec.course} - ${rec.description} (${rec.duration}, ${rec.price})`).join('\n')}

I'm interested in these courses. Please provide more details about admission process and fees.

Thank you!`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919848628863&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const renderOptions = (options, questionType) => {
    if (questionType === "select") {
      return (
        <div className="space-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleUserResponse(option)}
              className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )
    } else if (questionType === "multi-select") {
      return (
        <div className="space-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                const currentValue = studentData[conversationFlow[currentStep].field] || []
                const newValue = currentValue.includes(option.value)
                  ? currentValue.filter(item => item !== option.value)
                  : [...currentValue, option.value]
                handleUserResponse(newValue)
              }}
              className={`w-full text-left p-3 border rounded-lg transition-colors flex items-center gap-3 ${
                (studentData[conversationFlow[currentStep].field] || []).includes(option.value)
                  ? 'bg-primary-50 border-primary-300 text-primary-700'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <option.icon className={`text-lg ${option.color}`} />
              {option.value}
            </button>
          ))}
        </div>
      )
    }
    return null
  }

  const renderTextInput = () => (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Type your answer..."
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleUserResponse(e.target.value)
            e.target.value = ''
          }
        }}
      />
      <button
        onClick={(e) => {
          const input = e.target.previousElementSibling
          handleUserResponse(input.value)
          input.value = ''
        }}
        className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Send
      </button>
    </div>
  )

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <FaRobot className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Study Assistant</h3>
                <p className="text-sm text-gray-500">Inspire Academy</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="text-gray-500" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.type === 'bot' && (
                      <FaRobot className="text-primary-600 mt-1 flex-shrink-0" />
                    )}
                    {message.type === 'user' && (
                      <FaUser className="text-white mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{message.text}</p>
                      {message.options && (
                        <div className="mt-3">
                          {renderOptions(message.options, message.questionType)}
                        </div>
                      )}
                      {message.recommendations && (
                        <div className="mt-4 space-y-3">
                          <h4 className="font-semibold text-lg">📚 Recommended Courses:</h4>
                          {message.recommendations.map((rec, index) => (
                            <div key={index} className="bg-white p-3 rounded-lg border border-primary-200">
                              <h5 className="font-semibold text-primary-700">{rec.course}</h5>
                              <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                              <div className="flex justify-between items-center mt-2 text-sm">
                                <span className="text-gray-500">{rec.duration}</span>
                                <span className="font-semibold text-primary-600">{rec.price}</span>
                              </div>
                            </div>
                          ))}
                          <button
                            onClick={handleWhatsAppRedirect}
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                          >
                            <FaWhatsapp className="text-lg" />
                            Contact Us on WhatsApp
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <FaRobot className="text-primary-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {currentStep < conversationFlow.length && conversationFlow[currentStep].type === "text" && (
            <div className="p-4 border-t border-gray-200">
              {renderTextInput()}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AIChatbot
