import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Subscriptions.css';
import contactImage from '../images/contact.jpeg';

interface SubscriptionCardProps {
  title: string;
  features: string[];
  isPopular?: boolean;
  onContactClick?: () => void;
}

const SubscriptionCard = ({ title, features, isPopular, onContactClick }: SubscriptionCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className={`subscription-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">Most Popular</div>}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <ul className="features-list">
          {features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {title === "Enterprise" ? (
          <button className="subscribe-btn contact-btn" onClick={onContactClick}>Contact Us</button>
        ) : (
          <button className="subscribe-btn">Get Started</button>
        )}
      </Card.Body>
    </Card>
  </motion.div>
);

const Subscriptions = () => {
  const [showQRModal, setShowQRModal] = useState(false);

  const handleContactClick = () => {
    setShowQRModal(true);
  };

  const plans = [
    {
      title: "Standard",
    // Default price added
      features: [
        " ",
        "Basic Employee Management(up to 500 employees)",
        "3 Locations",
        "Usage(500)",
        "Face Spoof Detection",
        "Standard Reporting"
      ]
    },
    {
      title: "Pro",
      
      features: [
        " ",
        "Enhanced Employee Management(up to 1000 employees)",
        "5 Locations",
        "Usage(1000)",
        "Face Spoof Detection",
        "Advanced Reporting"
        
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
    
      features: [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "Customizable Solution ",  
        " ",
        " ",
        " ",
        " ",
        
        " "
      ],
      onContactClick: handleContactClick
    }
  ];

  return (
    <section className="subscriptions-section" id="subscriptions">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2>Choose Your Plan</h2>
          <p className="subtitle">Select the perfect plan for your business needs</p>
        </motion.div>
        
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <SubscriptionCard {...plan} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* QR Code Modal */}
      <Modal
        show={showQRModal}
        onHide={() => setShowQRModal(false)}
        centered
        className="qr-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Scan the QR code below to get in touch with our team:</p>
          <img 
            src={contactImage}
            alt="Contact QR Code" 
            className="qr-code-image"
          />
          <p className="mt-3">We'll get back to you shortly!</p>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Subscriptions; 