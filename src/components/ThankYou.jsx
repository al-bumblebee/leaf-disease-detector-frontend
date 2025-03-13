import React from "react";
import { motion } from "framer-motion"; // For animations
import "../styles/ThankYou.css"; // Import CSS for styling

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      {/* Main Content */}
      <motion.div
        className="thank-you-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="thank-you-title">Thank You!</h1>
        <p className="thank-you-message">
          We hope this tool helps you in identifying plant diseases and promoting healthier crops.
        </p>

        {/* Disclaimer Section */}
        <motion.div
          className="disclaimer-section"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="disclaimer-title">Disclaimer</h2>
          <p className="disclaimer-text">
            This website and the plant disease prediction model are for educational purposes only.
            The predictions are based on a deep learning model trained on publicly available datasets.
            Always consult a professional for critical agricultural decisions.
          </p>
        </motion.div>
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.a
        href="https://github.com/al-bumblebee" // Replace with your GitHub profile link
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="github-profile">
          <p className="name-text">Mohammad Almas</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" // GitHub logo
            alt="GitHub"
            className="github-icon"
          />
        </div>
      </motion.a>
    </div>
  );
};

export default ThankYou;