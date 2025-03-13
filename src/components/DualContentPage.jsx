import React from "react";
import { motion } from "framer-motion"; // For animations
import "../styles/DualContentPage.css"; // Import CSS for styling
import leftImage from '../assets/images/content_page/2_crop_icon.jpg' // Replace with your left image path
import rightImage from '../assets/images/content_page/2_cnn.jpg'; // Replace with your right image path

const DualContentPage = () => {
  // Function to open Dataset Details page in a new window
  const openDatasetDetails = () => {
    window.open("/data-details", "_blank"); // Replace with your actual route
  };

  // Function to open Model Details page in a new window
  const openModelDetails = () => {
    window.open("/model-overview", "_blank"); // Replace with your actual route
  };

  return (
    <div className="dual-content-container">
      {/* Left Side - Dataset Details */}
      <motion.div
        className="left-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Image */}
        <motion.img
          src={leftImage}
          alt="Dataset Details"
          className="content-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <h2 className="left-headline">Trained on 50,000+ Leaf Images</h2>
        <p className="left-subtext">Covers 15+ crops like Tomato, Potato, Corn, and Citrus.</p>
        <button className="content-button" onClick={openDatasetDetails}>View Dataset Details →</button>
      </motion.div>

      {/* Right Side - Model Details */}
      <motion.div
        className="right-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Right Image */}
        <motion.img
          src={rightImage}
          alt="Model Details"
          className="content-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <h2 className="right-headline">AI That Learns Like a Farmer</h2>
        <p className="right-subtext">Powered by Deep Learning & CNN for Precision.</p>
        <button className="content-button" onClick={openModelDetails}>How It Works →</button>
      </motion.div>
    </div>
  );
};

export default DualContentPage;