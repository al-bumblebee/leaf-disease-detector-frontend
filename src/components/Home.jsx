import React, { useRef } from "react";
import { motion } from "framer-motion"; // For animations
import "../styles/Home.css"; // Import CSS for styling

const Home = ({ dualContentRef }) => {
  const scrollToDualContent = () => {
    if (dualContentRef.current) {
      dualContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Content */}
      <div className="hero-content">
        {/* Tagline with Animation */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-tagline"
        >
          Plant leaf Disease Detection,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="hero-tagline"
        >
          Grow Better Tomorrow.
        </motion.h1>

        {/* Button with Animation */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-button"
          onClick={scrollToDualContent} // Scroll to Dual Content Page
        >
          Explore How →
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
