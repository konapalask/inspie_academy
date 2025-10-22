import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { ThreeDLoadingScreen } from './components/ThreeDLoader'
import AIChatbot from './components/AIChatbot' // ✅ Import chatbot

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Admissions from './pages/Admissions'
import Results from './pages/Results'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import StudentLogin from './pages/StudentLogin'
import Contact from './pages/Contact'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false) // ✅ chatbot toggle state

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(loadingInterval)
  }, [])

  if (isLoading) {
    return (
      <ThreeDLoadingScreen
        isLoading={isLoading}
        progress={loadingProgress}
        onComplete={() => setIsLoading(false)}
      />
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* ✅ Floating Chatbot Button - bottom right corner */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatbotOpen && (
          <button
            onClick={() => setIsChatbotOpen(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Open chatbot"
          >
            💬
          </button>
        )}
      </div>

      {/* ✅ AI Chatbot - Always rendered */}
      <AIChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </div>
  )
}
