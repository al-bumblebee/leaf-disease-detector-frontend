import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Prediction.css";

const galleryImages = [
  "/src/assets/images/CTA/Applescab.JPG",
  "/src/assets/images/CTA/Apple___Black_rot.JPG",
  "/src/assets/images/CTA/Apple___healthy.JPG",
  "/src/assets/images/CTA/Potato___Late_blight.JPG",
  "/src/assets/images/CTA/Orange___Haunglongbing.JPG",
  "/src/assets/images/CTA/Potato___healthy.JPG",
];

const Prediction = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async (imageFile) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Prediction failed');
      
      const data = await response.json();
      setPredictionResult(`${data.class} (${(data.confidence * 100).toFixed(2)}% confidence)`);
    } catch (error) {
      console.error('Prediction error:', error);
      setPredictionResult('Error in prediction');
    } finally {
      setLoading(false);
    }
  };

  // Updated handlers
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        handlePrediction(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImageClick = async (imageUrl) => {
    try {
      // Convert gallery image URL to File object
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], 'gallery-image.jpg', { type: 'image/jpeg' });
      
      setSelectedImage(imageUrl);
      handlePrediction(file);
    } catch (error) {
      console.error('Error loading gallery image:', error);
    }
  };


  return (
    <div className="prediction-container">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="prediction-title"
      >
        Predict Plant Disease
      </motion.h1>

      {/* Main Content */}
      <div className="prediction-content">
        {/* Left Side - Upload and Preview */}
        <div className="left-section">
          {/* Upload Section */}
          <motion.div
            className="upload-section"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <label htmlFor="image-upload" className="upload-label">
              Upload Leaf Image
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              className="upload-input"
            />
          </motion.div>

          {/* Image Preview */}
          {selectedImage && (
            <motion.div
              className="image-preview"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={selectedImage} alt="Selected Leaf" className="preview-image" />
            </motion.div>
          )}

          {/* Prediction Result */}
      
      {loading && <div className="loading-indicator">Analyzing...</div>}
      
      {predictionResult && (
        <motion.div
          className="result-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="result-headline">Prediction Result</h2>
          <p className="result-text">{predictionResult}</p>
        </motion.div>
      )}
        </div>

        {/* Right Side - Gallery */}
        <motion.div
          className="gallery-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="gallery-title">Or Choose from these Sample</h3>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                onClick={() => handleGalleryImageClick(image)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prediction;