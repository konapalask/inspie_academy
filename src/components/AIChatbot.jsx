import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaUser, FaTimes, FaWhatsapp } from 'react-icons/fa';

const AIChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    interestedCourse: '',
    weakSubjects: [],
    strongSubjects: [],
    currentClass: '',
    targetExam: ''
  });
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Show initial greeting
      setMessages([
        {
          id: 1,
          type: 'bot',
          text: "👋 Hello! Welcome to Inspire Academy! I'm your AI study assistant. I'll help you find the perfect course by understanding your academic needs.\n\nLet's start with your name - what should I call you?",
          timestamp: new Date()
        }
      ]);
      setCurrentStep(0);
    }
  }, [isOpen, messages.length]);

  const getCourseRecommendation = (details) => {
    const { interestedCourse, weakSubjects, strongSubjects } = details;
    
    let recommendation = `\n\n🎯 Based on your profile, here's my recommendation:\n\n`;
    
    if (interestedCourse === 'NEET') {
      recommendation += `**NEET Preparation Plan:**\n`;
      if (weakSubjects.includes('Biology')) {
        recommendation += `• Focus on Biology fundamentals with extra practice\n`;
      }
      if (weakSubjects.includes('Chemistry')) {
        recommendation += `• Strengthen Chemistry concepts with daily practice\n`;
      }
      if (weakSubjects.includes('Physics')) {
        recommendation += `• Build Physics problem-solving skills\n`;
      }
      recommendation += `• Join our NEET 2026 batch for comprehensive preparation`;
    } else if (interestedCourse === 'JEE') {
      recommendation += `**JEE Preparation Plan:**\n`;
      if (weakSubjects.includes('Mathematics')) {
        recommendation += `• Focus on Mathematics fundamentals\n`;
      }
      if (weakSubjects.includes('Physics')) {
        recommendation += `• Strengthen Physics problem-solving\n`;
      }
      if (weakSubjects.includes('Chemistry')) {
        recommendation += `• Build Chemistry conceptual clarity\n`;
      }
      recommendation += `• Join our JEE Main & Advanced batch`;
    } else if (interestedCourse === 'EAMCET') {
      recommendation += `**EAMCET Preparation Plan:**\n`;
      recommendation += `• Focus on Mathematics and Physics\n`;
      recommendation += `• Practice previous year papers\n`;
      recommendation += `• Join our EAMCET Master batch`;
    } else {
      recommendation += `**Foundation Course Plan:**\n`;
      recommendation += `• Build strong fundamentals in all subjects\n`;
      recommendation += `• Prepare for competitive exams early\n`;
      recommendation += `• Join our Foundation batch`;
    }
    
    return recommendation;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const response = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [
      ...prev,
      { id: Date.now(), type: 'user', text: response, timestamp: new Date() }
    ]);

    setIsTyping(true);
    
    setTimeout(() => {
      let botResponse = '';
      let nextStep = currentStep + 1;
      let options = null;

      // Handle different steps
      if (currentStep === 0) {
        // Name
        setUserDetails(prev => ({ ...prev, name: response }));
        botResponse = `Nice to meet you, ${response}! 📱\n\nCould you please share your phone number so our counselors can contact you?`;
      } else if (currentStep === 1) {
        // Phone
        setUserDetails(prev => ({ ...prev, phone: response }));
        botResponse = `Great! 📧\n\nWhat's your email address for course updates and study materials?`;
      } else if (currentStep === 2) {
        // Email
        setUserDetails(prev => ({ ...prev, email: response }));
        botResponse = `Perfect! 📚\n\nWhich course are you most interested in?`;
        options = ['NEET', 'JEE', 'EAMCET', 'Foundation'];
      } else if (currentStep === 3) {
        // Course
        setUserDetails(prev => ({ ...prev, interestedCourse: response }));
        botResponse = `Excellent choice! 🎯\n\nWhat's your current class/grade?`;
        options = ['9', '10', '11', '12', 'Dropper'];
      } else if (currentStep === 4) {
        // Class
        setUserDetails(prev => ({ ...prev, currentClass: response }));
        botResponse = `Got it! 📊\n\nWhich subjects do you find most challenging? (Select one or type multiple separated by comma)`;
        options = ['Physics', 'Chemistry', 'Mathematics', 'Biology'];
      } else if (currentStep === 5) {
        // Weak subjects
        const subjects = response.includes(',') ? response.split(',').map(s => s.trim()) : [response];
        setUserDetails(prev => ({ ...prev, weakSubjects: subjects }));
        botResponse = `I understand. 💪\n\nWhich subjects are you strongest in? (Select one or type multiple separated by comma)`;
        options = ['Physics', 'Chemistry', 'Mathematics', 'Biology'];
      } else if (currentStep === 6) {
        // Strong subjects
        const subjects = response.includes(',') ? response.split(',').map(s => s.trim()) : [response];
        setUserDetails(prev => ({ ...prev, strongSubjects: subjects }));
        botResponse = `Great! 🎯\n\nWhat's your target exam year?`;
        options = ['2025', '2026', '2027', '2028'];
      } else if (currentStep === 7) {
        // Target year - Final step
        const updatedDetails = { ...userDetails, targetExam: response };
        setUserDetails(updatedDetails);
        
        const recommendation = getCourseRecommendation(updatedDetails);
        botResponse = `${recommendation}\n\n📋 **Your Details Summary:**\n• Name: ${updatedDetails.name}\n• Phone: ${updatedDetails.phone}\n• Email: ${updatedDetails.email}\n• Course: ${updatedDetails.interestedCourse}\n• Class: ${updatedDetails.currentClass}\n• Weak in: ${updatedDetails.weakSubjects.join(', ')}\n• Strong in: ${updatedDetails.strongSubjects.join(', ')}\n• Target Year: ${response}\n\n💬 I'll connect you with our expert counselors who will create a personalized study plan for you!`;
        nextStep = -1; // End conversation
      }

      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: botResponse, 
          timestamp: new Date(),
          options: options 
        }
      ]);

      if (nextStep === -1) {
        // Show WhatsApp redirect
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { 
              id: Date.now() + 2, 
              type: 'bot', 
              text: "💬 Please contact us on WhatsApp for immediate assistance:", 
              timestamp: new Date(), 
              showWhatsApp: true 
            }
          ]);
        }, 1000);
      }

      setCurrentStep(nextStep);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickResponse = (response) => {
    setInputValue(response);
    setTimeout(() => handleSend(), 100);
  };

  const handleWhatsAppRedirect = () => {
    const message = `👋 Hello! I'm interested in Inspire Academy's coaching programs.

📋 **My Details:**
• Name: ${userDetails.name}
• Phone: ${userDetails.phone}
• Email: ${userDetails.email}
• Interested Course: ${userDetails.interestedCourse}
• Current Class: ${userDetails.currentClass}
• Weak Subjects: ${userDetails.weakSubjects.join(', ')}
• Strong Subjects: ${userDetails.strongSubjects.join(', ')}
• Target Exam Year: ${userDetails.targetExam}

Please provide me with information about:
• Course details and fees
• Admission process
• Batch timings
• Study materials
• Personalized study plan

Thank you!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919848628863&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] max-w-sm sm:w-96 md:w-[420px] h-[85vh] sm:h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col border-2 border-primary-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary-100 bg-gradient-to-r from-primary-50 to-blue-50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
              <FaRobot className="text-white text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-base sm:text-lg">AI Study Assistant</h3>
              <p className="text-xs sm:text-sm text-green-600 font-medium">● Online now</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-colors hover:scale-110">
            <FaTimes className="text-gray-500 text-base sm:text-lg" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 sm:p-4 rounded-2xl shadow-sm ${msg.type === 'user' ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
                <div className="flex items-start gap-2">
                  {msg.type === 'bot' && <FaRobot className="text-primary-600 mt-1 flex-shrink-0 text-sm sm:text-base" />}
                  {msg.type === 'user' && <FaUser className="text-white mt-1 flex-shrink-0 text-sm sm:text-base" />}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">{msg.text}</p>
                    
                    {/* Quick action buttons */}
                    {msg.options && index === messages.length - 1 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-xs sm:text-sm text-gray-600">Quick select:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {msg.options.map((option, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickResponse(option)}
                              className="p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-xs sm:text-sm font-medium"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* WhatsApp button */}
                    {msg.showWhatsApp && (
                      <div className="mt-4">
                        <button 
                          onClick={handleWhatsAppRedirect} 
                          className="w-full bg-green-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <FaWhatsapp className="text-base sm:text-lg" /> Contact Us on WhatsApp
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
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-2xl flex items-center gap-2">
                <FaRobot className="text-primary-600 text-sm sm:text-base" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
              disabled={currentStep === -1}
            />
            <button 
              onClick={handleSend}
              disabled={currentStep === -1}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIChatbot;
