import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const features = [
    {
      title: "Advanced Face Recognition",
      description: "State-of-the-art facial recognition technology for accurate identification",
      icon: "👁️"
    },
    {
      title: "Real-time Monitoring",
      description: "Instant alerts and monitoring for enhanced security",
      icon: "⚡"
    },
    {
      title: "Easy Integration",
      description: "Seamless integration with your existing systems",
      icon: "🔄"
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security for your sensitive data",
      icon: "🔒"
    }
  ];

  return (
    <section className="about-section" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2>About Visage</h2>
          <p className="subtitle">Revolutionizing Face Recognition Technology</p>
        </motion.div>

        <Row className="mb-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <h3>Our Mission</h3>
              <p>
                At Visage, we're dedicated to providing cutting-edge face recognition solutions 
                that enhance security and streamline operations for businesses worldwide. Our 
                technology combines advanced AI algorithms with user-friendly interfaces to 
                deliver exceptional results.
              </p>
              <p>
                With years of experience in the industry, we understand the unique challenges 
                businesses face and provide tailored solutions to meet their specific needs.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-stats"
            >
              <div className="stat-item">
                <h4>99.9%</h4>
                <p>Accuracy Rate</p>
              </div>
              <div className="stat-item">
                <h4>500+</h4>
                <p>Active Clients</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Support</p>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About; 