import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaUser, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaGraduationCap, 
  FaBookOpen, 
  FaChartLine, 
  FaCalendarAlt, 
  FaBell, 
  FaCog, 
  FaSignOutAlt,
  FaHome,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Demo credentials check
    const demoCredentials = {
      'demo@inspire.com': 'demo123',
      'student@inspire.com': 'student123',
      'test@inspire.com': 'test123'
    }
    
    setTimeout(() => {
      setIsLoading(false)
      if (demoCredentials[formData.username] === formData.password) {
        // Redirect to Inspire Exams website
        window.open('https://inspireexams.com/', '_blank', 'noopener,noreferrer')
        onLogin(formData.username)
      } else {
        alert('Invalid credentials. Try demo@inspire.com / demo123')
      }
    }, 1500)
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaGraduationCap className="text-white text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Portal</h2>
        <p className="text-gray-600">Access your academic dashboard</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Username / Roll Number
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
            Forgot password?
          </a>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </motion.button>
      </form>

      {/* Demo Credentials */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-sm font-semibold text-blue-800 mb-2">Demo Credentials:</h4>
        <div className="space-y-1 text-xs text-blue-700">
          <p><strong>Email:</strong> demo@inspire.com | <strong>Password:</strong> demo123</p>
          <p><strong>Email:</strong> student@inspire.com | <strong>Password:</strong> student123</p>
          <p><strong>Email:</strong> test@inspire.com | <strong>Password:</strong> test123</p>
        </div>
        <p className="text-xs text-blue-600 mt-2">
          * Login will redirect to Inspire Exams platform
        </p>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/admissions" className="text-primary-600 hover:text-primary-700 font-semibold">
            Apply for admission
          </a>
        </p>
      </div>
    </motion.div>
  )
}

const Dashboard = ({ username, onLogout }) => {
  const dashboardItems = [
    {
      title: "My Courses",
      description: "View your enrolled courses and progress",
      icon: FaBookOpen,
      color: "bg-blue-600",
      count: "3 Courses"
    },
    {
      title: "Academic Progress",
      description: "Track your performance and grades",
      icon: FaChartLine,
      color: "bg-green-600",
      count: "85% Average"
    },
    {
      title: "Schedule",
      description: "View your class timetable",
      icon: FaCalendarAlt,
      color: "bg-purple-600",
      count: "Next: Physics"
    },
    {
      title: "Notifications",
      description: "Important updates and announcements",
      icon: FaBell,
      color: "bg-orange-600",
      count: "5 New"
    }
  ]

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-6xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, {username}!</h2>
          <p className="text-gray-600">Here's your academic dashboard</p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white`}>
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-xs text-primary-600 font-semibold mt-1">{item.count}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-primary-50 to-blue-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Completed Physics Assignment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Attended Chemistry Lab</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Mathematics Test Scheduled</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <span className="text-sm font-medium text-gray-800">Download Study Material</span>
            </button>
            <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <span className="text-sm font-medium text-gray-800">Submit Assignment</span>
            </button>
            <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <span className="text-sm font-medium text-gray-800">Book Doubt Session</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function StudentLogin(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = (user) => {
    setUsername(user)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {isLoggedIn ? (
          <Dashboard username={username} onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </div>
  )
}
