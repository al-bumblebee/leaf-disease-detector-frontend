import React from "react";
import { motion } from "framer-motion"; // For animations
import "../styles/ModelDetails.css"; // Import CSS for styling

const ModelDetails = () => {
  return (
    <div className="model-details-container">
      {/* Header Section */}
      <motion.div
        className="header-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="header-title">Convolutional Neural Network (CNN) Model for Plant Leaf Disease Prediction</h1>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="introduction-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="section-title">Introduction</h2>
        <p className="section-text">
          Our deep learning model utilizes a Convolutional Neural Network (CNN) to effectively classify plant leaf
          diseases. CNNs are particularly powerful for image-based tasks as they can automatically learn spatial
          hierarchies of features from input images. This model processes images of size 128x128 with three color
          channels (RGB) and classifies them into one of eight disease categories.
        </p>
      </motion.div>

      {/* CNN Architecture Section */}
      <motion.div
        className="architecture-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="section-title">CNN Architecture</h2>
        <p className="section-text">
          The architecture of our CNN consists of multiple layers, each serving a specific role in feature extraction
          and classification. Below is an explanation of the model’s layers:
        </p>
        <ul className="architecture-list">
          <li>
            <strong>Convolutional Layers:</strong> The first layer applies 32 filters of size 3x3 with ReLU activation
            and 'same' padding to maintain the input size. The second convolutional layer also uses 32 filters of size
            3x3 with ReLU activation to extract deeper features.
          </li>
          <li>
            <strong>Pooling Layer:</strong> A MaxPooling layer with a pool size of 2x2 and a stride of 2 reduces the
            spatial dimensions, preserving important features while decreasing computational complexity.
          </li>
          <li>
            <strong>Flattening Layer:</strong> The extracted feature maps are flattened into a one-dimensional vector
            for input to the fully connected layers.
          </li>
          <li>
            <strong>Fully Connected (Dense) Layers:</strong> A dense layer with 1500 neurons and ReLU activation learns
            complex patterns from the features. A Dropout layer with a dropout rate of 40% is included to prevent
            overfitting. The final dense layer consists of 8 neurons with a softmax activation function, which outputs
            probabilities for each of the 8 disease classes.
          </li>
        </ul>
      </motion.div>

      {/* Model Performance Section */}
      <motion.div
        className="performance-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2 className="section-title">Model Performance</h2>
        <p className="section-text">
          The model was trained using multiple epochs, progressively improving its accuracy. The graph below visualizes
          the accuracy trends over training epochs:
        </p>
        <div className="accuracy-graph">
          <img
            src="src/assets/images/Graph.png" // Replace with your accuracy graph image
            alt="Accuracy Graph"
            className="graph-image"
          />
          <p className="graph-caption">
            The <span className="red-text">red line</span> represents the training accuracy, which steadily increases as
            the model learns. The <span className="blue-text">blue line</span> represents validation accuracy, which
            closely follows the training trend, indicating a well-generalized model.
          </p>
        </div>
      </motion.div>

      {/* Conclusion Section */}
      <motion.div
        className="conclusion-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          This CNN-based model demonstrates high accuracy in classifying plant leaf diseases. The structured layer-wise
          learning approach enables effective feature extraction and classification, making it a reliable tool for plant
          disease detection using AI.
        </p>
      </motion.div>
    </div>
  );
};

export default ModelDetails;