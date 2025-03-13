import React from "react";
import { motion } from "framer-motion"; // For animations
import "../styles/DatasetDetails.css"; // Import CSS for styling

// Import images directly
import Apple_Apple_scab from "../assets/images/CTA/Applescab.JPG";
import Apple_Black_rot from "../assets/images/CTA/Apple___Black_rot.JPG";
import Apple_Cedar_apple_rust from "../assets/images/CTA/Apple___Cedar_apple_rust.JPG";
import Apple_healthy from "../assets/images/CTA/Apple___healthy.JPG";
import Orange_Haunglongbing from "../assets/images/CTA/Orange___Haunglongbing.JPG";
import Potato_Early_blight from "../assets/images/CTA/Potato___Early_blight.JPG";
import Potato_Late_blight from "../assets/images/CTA/Potato___healthy.JPG";
import Potato_healthy from "../assets/images/CTA/Potato___Late_blight.JPG";

// Sample images for each class
const classImages = {
  Apple_Apple_scab,
  Apple_Black_rot,
  Apple_Cedar_apple_rust,
  Apple_healthy,
  Orange_Haunglongbing,
  Potato_Early_blight,
  Potato_Late_blight,
  Potato_healthy,
};

const DatasetDetails = () => {
  return (
    <div className="dataset-details-container">
      {/* Header Section */}
      <motion.div
        className="header-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="header-title">Dataset Information</h1>
        <p className="header-subtitle">
          The foundation of our plant disease detection system is built on the PlantVillage dataset, a
          comprehensive and widely recognized dataset in the field of agricultural research. This dataset is
          instrumental in training and validating our deep learning model, enabling it to accurately identify
          various plant diseases.
        </p>
      </motion.div>

      {/* About the Dataset Section */}
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="section-title">About the PlantVillage Dataset</h2>
        <ul className="about-list">
          <li>
            <strong>Total Images:</strong> Over 19,355 labeled images of healthy and diseased plant leaves.
          </li>
          <li>
            <strong>Plant Classes:</strong> The dataset includes 8 specific classes, covering a diverse range
            of crops and their associated diseases.
          </li>
          <li>
            <strong>Disease Categories:</strong> Each plant class is further divided into healthy and diseased
            categories, allowing the model to distinguish between healthy plants and those affected by specific
            diseases.
          </li>
        </ul>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="features-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="section-title">Key Features of the Dataset</h2>
        <ul className="features-list">
          <li>
            <strong>High-Quality Images:</strong> The dataset consists of high-resolution images, ensuring that
            the model can capture fine details such as leaf texture, color variations, and disease-specific
            patterns.
          </li>
          <li>
            <strong>Focused Class Selection:</strong> Due to limited computational resources, we have focused
            on 8 specific classes from the PlantVillage dataset. This allows us to train a robust model while
            optimizing for performance and accuracy.
          </li>
          <li>
            <strong>Balanced Classes:</strong> The selected classes are well-balanced, reducing the risk of
            bias in the model's predictions.
          </li>
        </ul>
      </motion.div>

      {/* Pie Chart Section (Commented Out for Future Use) */}
      <motion.div
        className="pie-chart-section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2 className="section-title">Dataset Split</h2>
        <div className="pie-chart">
        <img
            src="src/assets/images/Dataset.png" // Replace with your accuracy graph image
            alt="Dataset Split"
            className="chart-image"
            width="50%"
            height="50%"
          />
        </div>
      </motion.div>

      {/* Selected Plant Classes Section */}
      <motion.div
        className="classes-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2 className="section-title">Selected Plant Classes and Disease Categories</h2>
        <div className="classes-grid">
          <div className="class-item">
            <img src={classImages.Apple_Apple_scab} alt="Apple Scab" className="class-image" />
            <h3>Apple_Apple_scab</h3>
            <p>
              <strong>Disease:</strong> Apple Scab
            </p>
            <p>
              <strong>Symptoms:</strong> Dark, scaly lesions on leaves and fruit.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Apple_Black_rot} alt="Black Rot" className="class-image" />
            <h3>Apple_Black_rot</h3>
            <p>
              <strong>Disease:</strong> Black Rot
            </p>
            <p>
              <strong>Symptoms:</strong> Brown lesions with concentric rings, often leading to fruit rot.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Apple_Cedar_apple_rust} alt="Cedar Apple Rust" className="class-image" />
            <h3>Apple_Cedar_apple_rust</h3>
            <p>
              <strong>Disease:</strong> Cedar Apple Rust
            </p>
            <p>
              <strong>Symptoms:</strong> Yellow-orange spots on leaves, often with a rust-like appearance.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Apple_healthy} alt="Healthy Apple" className="class-image" />
            <h3>Apple_healthy</h3>
            <p>
              <strong>Disease:</strong> Healthy apple leaves with no signs of disease.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Orange_Haunglongbing} alt="Citrus Greening" className="class-image" />
            <h3>Orange_Haunglongbing_(Citrus_greening)</h3>
            <p>
              <strong>Disease:</strong> Citrus Greening (Haunglongbing)
            </p>
            <p>
              <strong>Symptoms:</strong> Yellowing of leaves, stunted growth, and misshapen fruit.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Potato_Early_blight} alt="Early Blight" className="class-image" />
            <h3>Potato_Early_blight</h3>
            <p>
              <strong>Disease:</strong> Early Blight
            </p>
            <p>
              <strong>Symptoms:</strong> Dark, concentric rings on leaves, often leading to defoliation.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Potato_Late_blight} alt="Late Blight" className="class-image" />
            <h3>Potato_Late_blight</h3>
            <p>
              <strong>Disease:</strong> Late Blight
            </p>
            <p>
              <strong>Symptoms:</strong> Water-soaked lesions on leaves, often with a white fungal growth.
            </p>
          </div>
          <div className="class-item">
            <img src={classImages.Potato_healthy} alt="Healthy Potato" className="class-image" />
            <h3>Potato_healthy</h3>
            <p>
              <strong>Disease:</strong> Healthy potato leaves with no signs of disease.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why These Classes Section */}
      <motion.div
        className="why-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <h2 className="section-title">Why These Classes?</h2>
        <p className="why-text">
          Due to limited computational power, we focused on these 8 classes to ensure efficient training and
          validation of the model. These classes represent a mix of common and economically significant
          diseases, making the model highly relevant for real-world agricultural applications.
        </p>
      </motion.div>

      {/* Dataset Source Section */}
      <motion.div
        className="source-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        <h2 className="section-title">Dataset Source</h2>
        <p className="source-text">
          The PlantVillage dataset is publicly available and has been widely used in research for plant disease
          detection. It was sourced from Kaggle, a popular platform for datasets and machine learning
          competitions. The dataset is augmented to include variations in lighting, orientation, and scale,
          ensuring that the model is robust to real-world conditions.
        </p>
      </motion.div>

      {/* How the Dataset is Used Section */}
      <motion.div
        className="usage-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
      >
        <h2 className="section-title">How the Dataset is Used</h2>
        <ul className="usage-list">
          <li>
            <strong>Training the Model:</strong> The dataset is split into training and validation sets, with
            80% of the images used for training and 20% for validation. This ensures that the model learns from
            a large portion of the data while being tested on unseen samples.
          </li>
          <li>
            <strong>Data Augmentation:</strong> To improve the model's generalization, we apply data
            augmentation techniques such as rotation, flipping, and scaling to artificially expand the dataset.
          </li>
          <li>
            <strong>Model Evaluation:</strong> The model's performance is evaluated using metrics such as
            accuracy, precision, recall, and F1-score, ensuring that it can reliably detect diseases across the
            selected plant classes.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DatasetDetails;