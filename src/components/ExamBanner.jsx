import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift, FaClock, FaExternalLinkAlt } from "react-icons/fa";

const ExamBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;

    // Get or set the reset timestamp
    const getResetTime = () => {
      const stored = localStorage.getItem("examBannerResetTime");
      if (stored) return parseInt(stored, 10);
      const now = Date.now();
      localStorage.setItem("examBannerResetTime", now.toString());
      return now;
    };

    // Calculate the remaining time
    const calcRemaining = () => {
      const resetTime = getResetTime();
      const now = Date.now();
      const diff = now - resetTime;
      const remaining = TWELVE_HOURS_MS - (diff % TWELVE_HOURS_MS);

      // Convert to hours/minutes/seconds
      const totalSeconds = Math.floor(remaining / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { hours, minutes, seconds, totalSeconds };
    };

    // Initial update
    setTimeLeft(calcRemaining());

    // Tick every second
    const interval = setInterval(() => {
      const remaining = calcRemaining();

      // Debug log to see timer updates
      console.log('Timer update:', `${remaining.hours}:${remaining.minutes}:${remaining.seconds}`);

      // If 12 hours completed, reset timer
      if (remaining.totalSeconds <= 0) {
        localStorage.setItem("examBannerResetTime", Date.now().toString());
        // Reset banner closed status so it shows again
        localStorage.removeItem('examBannerClosed');
        // Show flash effect
        const banner = document.querySelector('.exam-banner');
        if (banner) {
          banner.style.animation = 'flash 0.5s ease-in-out';
          setTimeout(() => {
            banner.style.animation = '';
          }, 500);
        }
      }

      setTimeLeft({
        hours: remaining.hours,
        minutes: remaining.minutes,
        seconds: remaining.seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleExamClick = () => {
    window.open("https://inspireexams.com/", "_blank", "noopener,noreferrer");
  };

  return (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="exam-banner relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
              }}
            >
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.03) 35px, rgba(212, 175, 55, 0.03) 70px)'
        }}></div>
      </div>

      {/* Animated golden shimmer */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)',
            transform: 'skewX(-12deg)'
          }}
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 py-4 sm:py-5 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left Content */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30"
            >
              <FaGift className="text-lg" style={{ color: '#D4AF37' }} />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="hidden sm:block w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}></div>
                <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: '#D4AF37' }}>
                  Limited Time
                </span>
                <div className="hidden sm:block w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}></div>
              </div>
              
              <h3 className="text-sm sm:text-base lg:text-lg font-light tracking-wide text-white mb-1">
                Exclusive Assessment & Fee Concession
              </h3>
              
              <p className="text-xs text-white/50 font-light tracking-wide hidden sm:block">
                Complimentary evaluation with up to 50% tuition reduction
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Premium Timer */}
            <motion.div
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm relative"
              style={{
                background: 'rgba(212, 175, 55, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              animate={{
                boxShadow: [
                  '0 0 0px rgba(212, 175, 55, 0)',
                  '0 0 20px rgba(212, 175, 55, 0.15)',
                  '0 0 0px rgba(212, 175, 55, 0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaClock className="text-sm" style={{ color: '#D4AF37' }} />
              <div className="flex items-center gap-1.5 font-light text-base tracking-wider">
                <span className="text-white w-6 text-center">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="text-white/30">:</span>
                <span className="text-white w-6 text-center">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="text-white/30">:</span>
                <span className="text-white w-6 text-center">{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </motion.div>

            {/* Luxury Button */}
            <motion.button
              onClick={handleExamClick}
              className="relative px-6 py-2.5 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #C5A028 100%)',
                color: '#000000'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                }}
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                <span className="hidden sm:inline">Begin Assessment</span>
                <span className="sm:hidden">Start Now</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExamBanner;
