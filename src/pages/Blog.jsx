import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCalendarAlt, 
  FaUser, 
  FaEye, 
  FaHeart, 
  FaShare, 
  FaBookOpen, 
  FaLightbulb, 
  FaTrophy, 
  FaGraduationCap,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTag,
  FaTimes,
  FaQuoteLeft,
  FaArrowRight,
  FaPlay
} from 'react-icons/fa'
import YouTubeVideo from '../components/YouTubeVideo'

const BlogCard = ({ post, index, onReadMore }) => (
  <motion.article
    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {post.category}
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
        <FaHeart className="text-red-500" />
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <FaCalendarAlt />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaUser />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{post.views}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary-600 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, idx) => (
          <span 
            key={idx}
            className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
          >
            <FaTag className="text-xs" />
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <button 
          onClick={() => onReadMore(post)}
          className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Read More →
        </button>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <FaHeart />
          </button>
          <button className="text-gray-400 hover:text-primary-600 transition-colors">
            <FaShare />
          </button>
        </div>
      </div>
    </div>
  </motion.article>
)

const BlogModal = ({ post, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <FaTimes />
            </button>
            <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye />
                <span>{post.views}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              {post.fullContent}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8 mb-6">
              {post.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaHeart className="mr-1" />
                  Like
                </button>
                <button className="text-gray-400 hover:text-primary-600 transition-colors">
                  <FaShare className="mr-1" />
                  Share
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

const SocialShare = ({ post }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h4 className="font-semibold text-gray-800 mb-4">Share this post</h4>
    <div className="flex gap-3">
      <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
        <FaFacebook />
      </button>
      <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
        <FaTwitter />
      </button>
      <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
        <FaWhatsapp />
      </button>
      <button className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
        <FaInstagram />
      </button>
      <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
        <FaLinkedin />
      </button>
    </div>
  </div>
)

export default function Blog(){
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMore = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  const categories = [
    { id: 'all', name: 'All Posts', icon: FaBookOpen },
    { id: 'study-tips', name: 'Study Tips', icon: FaLightbulb },
    { id: 'exam-strategies', name: 'Exam Strategies', icon: FaTrophy },
    { id: 'motivation', name: 'Motivation', icon: FaGraduationCap },
    { id: 'success-stories', name: 'Success Stories', icon: FaTrophy }
  ]

  const posts = [
    {
      id: 1,
      title: '10 Essential Tips to Crack JEE Mains 2024',
      excerpt: 'Master the art of JEE preparation with these proven strategies from our expert faculty. Learn time management, concept clarity, and problem-solving techniques.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop&q=80',
      category: 'Study Tips',
      date: 'Dec 15, 2023',
      author: 'Dr. Rajesh Kumar',
      views: '2.5k',
      tags: ['JEE Mains', 'Study Tips', 'Preparation'],
      categoryId: 'study-tips',
      fullContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Preparing for JEE Mains 2024 requires a strategic approach and consistent effort. After analyzing the success patterns of our top-performing students, we've compiled these essential tips that can significantly improve your chances of success.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <FaQuoteLeft className="text-blue-500 text-2xl mr-4 mt-1" />
              <div>
                <p className="text-blue-800 font-medium italic">
                  "Success in JEE is not about studying harder, but studying smarter. The right strategy can make all the difference."
                </p>
                <p className="text-blue-600 text-sm mt-2">- Dr. Rajesh Kumar, Physics Expert</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Master the Fundamentals</h3>
          <p className="text-gray-700 leading-relaxed">
            Before diving into complex problems, ensure you have a solid understanding of basic concepts. Spend 40% of your time on NCERT textbooks, as they form the foundation for all competitive exams.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">2. Time Management is Key</h3>
          <p className="text-gray-700 leading-relaxed">
            Create a realistic study schedule that allocates time for all three subjects. Our successful students typically follow a 2:2:1 ratio for Physics, Chemistry, and Mathematics respectively.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">3. Practice with Previous Year Papers</h3>
          <p className="text-gray-700 leading-relaxed">
            Solve at least 10 years of previous year papers. This helps you understand the exam pattern, identify important topics, and improve your speed and accuracy.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">4. Focus on Weak Areas</h3>
          <p className="text-gray-700 leading-relaxed">
            Identify your weak subjects and topics early. Allocate extra time to strengthen these areas rather than avoiding them. Remember, every topic is important in JEE.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">5. Regular Mock Tests</h3>
          <p className="text-gray-700 leading-relaxed">
            Take mock tests every week to simulate exam conditions. Analyze your performance, identify mistakes, and work on improving your weak points.
          </p>

          {/* YouTube Video */}
          <div className="my-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">📺 Watch: JEE Mains Strategy Video</h4>
            <YouTubeVideo
              videoId="dQw4w9WgXcQ"
              title="JEE Mains 2024 Complete Strategy"
              description="Learn the complete strategy to crack JEE Mains 2024 with expert tips and tricks"
              thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              className="w-full"
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-green-800 mb-3">Success Tip</h4>
            <p className="text-green-700">
              Consistency beats intensity. It's better to study 6 hours daily than 12 hours occasionally. Regular practice and revision are the keys to success.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Time Management Strategies for EAMCET Success',
      excerpt: 'Learn how to effectively manage your time during EAMCET preparation. Discover techniques to balance all subjects and maximize your study efficiency.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&q=80',
      category: 'Exam Strategies',
      date: 'Dec 12, 2023',
      author: 'Prof. Priya Sharma',
      views: '1.8k',
      tags: ['EAMCET', 'Time Management', 'Strategy'],
      categoryId: 'exam-strategies',
      fullContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            EAMCET preparation requires a well-structured approach to time management. With multiple subjects to cover and limited time, effective planning becomes crucial for success.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Creating Your Study Schedule</h3>
          <p className="text-gray-700 leading-relaxed">
            Divide your day into focused study blocks. Allocate 2-3 hours for each subject with short breaks in between. This prevents mental fatigue and improves retention.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Subject-wise Time Allocation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Mathematics:</strong> 40% of your study time - Focus on problem-solving and concept application</li>
            <li><strong>Physics:</strong> 35% of your study time - Emphasize numerical problems and derivations</li>
            <li><strong>Chemistry:</strong> 25% of your study time - Balance between theory and numerical problems</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Weekly Revision Strategy</h3>
          <p className="text-gray-700 leading-relaxed">
            Dedicate one day per week for revision. Review all topics covered during the week and solve practice questions to reinforce learning.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">Pro Tip</h4>
            <p className="text-yellow-700">
              Use the Pomodoro Technique: Study for 25 minutes, take a 5-minute break. This method improves focus and prevents burnout.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'From Average to Excellent: A Student\'s Journey',
      excerpt: 'Read the inspiring story of Rahul, who transformed from a struggling student to a JEE topper with dedication and the right guidance.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&q=80',
      category: 'Success Stories',
      date: 'Dec 10, 2023',
      author: 'Rahul Kumar',
      views: '3.2k',
      tags: ['Success Story', 'Motivation', 'JEE'],
      categoryId: 'success-stories',
      fullContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey from being an average student to securing AIR 156 in JEE Mains was not easy, but it was definitely worth every moment of struggle and hard work.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Beginning</h3>
          <p className="text-gray-700 leading-relaxed">
            When I joined Andhra Inspire Academy in Class 11, I was struggling with basic concepts in Physics and Mathematics. My confidence was low, and I often doubted my abilities.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">The Turning Point</h3>
          <p className="text-gray-700 leading-relaxed">
            The faculty at Andhra Inspire Academy didn't just teach me subjects; they taught me how to learn. Their personalized approach and constant encouragement helped me believe in myself.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">My Study Strategy</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Woke up at 5 AM daily for focused study sessions</li>
            <li>Solved at least 50 problems daily across all subjects</li>
            <li>Maintained a detailed error log to track mistakes</li>
            <li>Participated actively in doubt-clearing sessions</li>
            <li>Regular mock tests to assess progress</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">The Result</h3>
          <p className="text-gray-700 leading-relaxed">
            After two years of consistent effort and guidance, I secured AIR 156 in JEE Mains and got admission to IIT Delhi in Computer Science. The journey taught me that with the right guidance and determination, anything is possible.
          </p>

          {/* YouTube Video */}
          <div className="my-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">📺 Watch: My Success Story Video</h4>
            <YouTubeVideo
              videoId="jNQXAC9IVRw"
              title="From Average to IIT: My JEE Success Story"
              description="Hear Rahul's complete journey from struggling student to IIT Delhi"
              thumbnail="https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg"
              className="w-full"
            />
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-purple-800 mb-3">Message to Fellow Students</h4>
            <p className="text-purple-700">
              "Don't let your current performance define your potential. With consistent effort and the right guidance, you can achieve anything you set your mind to. Believe in yourself!"
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'How to Stay Motivated During Long Study Sessions',
      excerpt: 'Discover practical techniques to maintain motivation and focus during extended study periods. Learn from our successful students.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&q=80',
      category: 'Motivation',
      date: 'Dec 8, 2023',
      author: 'Dr. Anjali Singh',
      views: '2.1k',
      tags: ['Motivation', 'Study Tips', 'Focus'],
      categoryId: 'motivation',
      fullContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Maintaining motivation during long study sessions is one of the biggest challenges students face. Here are proven techniques that have helped our students stay focused and motivated.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Set Clear Goals</h3>
          <p className="text-gray-700 leading-relaxed">
            Break down your study sessions into specific, achievable goals. Instead of "study for 6 hours," set goals like "complete 3 chapters of Physics" or "solve 20 mathematics problems."
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Create a Conducive Environment</h3>
          <p className="text-gray-700 leading-relaxed">
            Your study environment plays a crucial role in maintaining focus. Ensure good lighting, comfortable seating, and minimal distractions. Keep your study materials organized and easily accessible.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Use the Reward System</h3>
          <p className="text-gray-700 leading-relaxed">
            Reward yourself after completing study goals. This could be a short break, your favorite snack, or time with friends. Positive reinforcement helps maintain motivation.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Practice Mindfulness</h3>
          <p className="text-gray-700 leading-relaxed">
            Take 5-minute mindfulness breaks every hour. Practice deep breathing or meditation to refresh your mind and maintain focus.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-orange-800 mb-3">Remember</h4>
            <p className="text-orange-700">
              Motivation is not constant. It's normal to have ups and downs. The key is to develop habits that help you push through the difficult moments.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'Physics Problem-Solving Techniques for Competitive Exams',
      excerpt: 'Master advanced problem-solving techniques in Physics that will give you an edge in JEE and other competitive exams.',
      image: 'https://praxilabs.com/en/blog/wp-content/uploads/2025/07/Important-Physics-Equations-in-History-1.webp',
      category: 'Study Tips',
      date: 'Dec 5, 2023',
      author: 'Prof. Vikram Reddy',
      views: '1.9k',
      tags: ['Physics', 'Problem Solving', 'JEE'],
      categoryId: 'study-tips',
      fullContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Physics problem-solving in competitive exams requires a systematic approach and deep conceptual understanding. Here are the techniques that have helped our students excel.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Step-by-Step Problem Solving</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Read the problem carefully</strong> - Understand what is given and what is asked</li>
            <li><strong>Draw diagrams</strong> - Visual representation helps in understanding the problem</li>
            <li><strong>Identify the concept</strong> - Determine which physics principle applies</li>
            <li><strong>Write down given data</strong> - List all known quantities with units</li>
            <li><strong>Choose the right formula</strong> - Select appropriate equations</li>
            <li><strong>Solve step by step</strong> - Show all calculations clearly</li>
            <li><strong>Check your answer</strong> - Verify if the result makes physical sense</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Common Problem Types</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Kinematics:</strong> Focus on understanding motion in different coordinate systems</li>
            <li><strong>Dynamics:</strong> Master Newton's laws and their applications</li>
            <li><strong>Work and Energy:</strong> Understand conservation principles</li>
            <li><strong>Rotational Motion:</strong> Practice problems involving angular quantities</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Time Management Tips</h3>
          <p className="text-gray-700 leading-relaxed">
            Allocate time based on problem difficulty. Easy problems: 2-3 minutes, Medium problems: 5-7 minutes, Hard problems: 10-15 minutes. If you're stuck, move on and come back later.
          </p>

          {/* YouTube Video */}
          <div className="my-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">📺 Watch: Physics Problem Solving Techniques</h4>
            <YouTubeVideo
              videoId="9bZkp7q19f0"
              title="Physics Problem Solving for JEE & NEET"
              description="Master the art of solving physics problems with expert techniques"
              thumbnail="https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg"
              className="w-full"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Expert Tip</h4>
            <p className="text-blue-700">
              Practice dimensional analysis to check your answers. If the units don't match, there's likely an error in your calculation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'Chemistry: Mastering Organic Reactions',
      excerpt: 'A comprehensive guide to understanding and memorizing organic chemistry reactions for JEE and EAMCET preparation.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop&q=80',
      category: 'Study Tips',
      date: 'Dec 3, 2023',
      author: 'Dr. Meera Patel',
      views: '2.7k',
      tags: ['Chemistry', 'Organic Reactions', 'Study Tips'],
      categoryId: 'study-tips',
      fullContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Organic chemistry often seems overwhelming due to the vast number of reactions. However, with the right approach, you can master this subject and excel in competitive exams.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Understanding Reaction Mechanisms</h3>
          <p className="text-gray-700 leading-relaxed">
            Don't just memorize reactions; understand the mechanisms. This helps you predict products and solve complex problems. Focus on electron movement and bond formation/breaking.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Key Reaction Types</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Substitution Reactions:</strong> SN1, SN2 mechanisms and their applications</li>
            <li><strong>Elimination Reactions:</strong> E1, E2 mechanisms and stereochemistry</li>
            <li><strong>Addition Reactions:</strong> Electrophilic and nucleophilic additions</li>
            <li><strong>Oxidation-Reduction:</strong> Common oxidizing and reducing agents</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Memory Techniques</h3>
          <p className="text-gray-700 leading-relaxed">
            Create reaction maps connecting different functional groups. Use mnemonics for complex reaction sequences. Practice drawing mechanisms repeatedly to build muscle memory.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Problem-Solving Strategy</h3>
          <p className="text-gray-700 leading-relaxed">
            Start with identifying the functional groups in the starting material. Determine the type of reaction based on reagents and conditions. Predict the product and verify using reaction mechanisms.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-green-800 mb-3">Study Schedule</h4>
            <p className="text-green-700">
              Dedicate 2-3 hours daily to organic chemistry. Spend 60% time on mechanisms, 30% on practice problems, and 10% on revision of previous topics.
            </p>
          </div>
        </div>
      )
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.categoryId === selectedCategory)

  const featuredPost = posts[0]

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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Best Institute for Intermediate Students - Study Tips & Guidance</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
          Best institute for intermediate students - With 13+ years of experience and 10,000+ students trained, gain insightful articles and expert advice for Class 11 & 12 students. Explore preparation strategies, study tips, and motivational stories of successful intermediate students. Stay updated with the latest study tips, exam strategies, and educational insights for intermediate students.
        </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaBookOpen className="inline mr-2" />
                Study Tips
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaTrophy className="inline mr-2" />
                Success Stories
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaLightbulb className="inline mr-2" />
                Expert Insights
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Post</h2>
            <p className="text-xl text-gray-600">Don't miss our latest insights</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{featuredPost.views}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleReadMore(featuredPost)}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-fit"
                >
                  Read Full Article →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find content that interests you</p>
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

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            layout
          >
            <div className="lg:col-span-2">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                layout
              >
                {filteredPosts.slice(1).map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} onReadMore={handleReadMore} />
                ))}
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <SocialShare post={featuredPost} />
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {['JEE Mains', 'EAMCET', 'Study Tips', 'Motivation', 'Success Stories', 'Physics', 'Chemistry', 'Mathematics'].map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Subscribe to Updates</h4>
                <p className="text-gray-600 text-sm mb-4">Get the latest posts delivered to your inbox</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with Our Blog</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get regular updates on study tips, exam strategies, and success stories from our expert faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Subscribe to Blog
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Follow on Social Media
              </button>
            </div>
          </motion.div>
      </div>
    </section>

    {/* Blog Modal */}
    {selectedPost && (
      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    )}
    </div>
  )
}
