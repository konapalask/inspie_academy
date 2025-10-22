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
              className="exam-banner bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-2 sm:py-3 px-2 sm:px-4 relative overflow-hidden"
            >
      {/* Background shimmer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 relative z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="bg-white/20 rounded-full p-1 sm:p-2"
          >
            <FaGift className="text-sm sm:text-lg" />
          </motion.div>
          <div>
            <h3 className="font-bold text-sm sm:text-base md:text-lg">
              🎉 Special Offer: Write Exam & Get Fee Concession!
            </h3>
            <p className="text-xs sm:text-sm opacity-90">
              Take our free mock test and get up to 50% discount on course fees
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          {/* Timer */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2 border-2 border-white/30"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.3)",
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 0px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaClock className="text-sm sm:text-lg" />
            <div className="flex items-center gap-1 font-mono text-sm sm:text-lg font-bold">
              <span className="bg-white/30 rounded px-1 sm:px-2 py-1 min-w-[1.5rem] sm:min-w-[2rem] text-center">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-white/80">:</span>
              <span className="bg-white/30 rounded px-1 sm:px-2 py-1 min-w-[1.5rem] sm:min-w-[2rem] text-center">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-white/80">:</span>
              <span className="bg-white/30 rounded px-1 sm:px-2 py-1 min-w-[1.5rem] sm:min-w-[2rem] text-center">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* Button */}
          <motion.button
            onClick={handleExamClick}
            className="bg-white text-orange-600 px-3 sm:px-6 py-2 rounded-lg font-bold hover:bg-orange-50 transition-all duration-300 flex items-center gap-1 sm:gap-2 shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:inline">Take Free Exam</span>
            <span className="sm:hidden">Free Exam</span>
            <FaExternalLinkAlt className="text-xs sm:text-sm" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExamBanner;
