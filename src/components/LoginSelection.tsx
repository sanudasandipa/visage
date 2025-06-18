import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './LoginSelection.css';

interface LoginCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  index: number;
}

const LoginCard = ({ title, description, icon, link, index }: LoginCardProps) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCardClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.open(link, '_blank');
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className={`login-card ${isLoading ? 'loading' : ''}`} 
        onClick={handleCardClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
        aria-label={`Login to ${title}`}
      >
        <div className="security-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Secure
        </div>
        <Card.Body className="text-center">          <div className="login-card-icon">
            {isLoading ? (
              <div className="loading-spinner">⟳</div>
            ) : (
              icon
            )}
          </div>
          <Card.Title className="login-card-title">{title}</Card.Title>
          <Card.Text className="login-card-description">
            {description}
          </Card.Text>
          <div className="login-card-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const LoginSelection = () => {
  const navigate = useNavigate();  const loginOptions = [
    {
      title: "Site Admin",
      description: "Manage system settings, user permissions, and global configurations",
      icon: "🔧",
      link: "https://visage.sltdigitallab.lk/NewUI/new/site_admin/login.html"
    },
    {
      title: "Client Dashboard",
      description: "Access your personal analytics, reports, and attendance data",
      icon: "📊",
      link: "https://visage.sltdigitallab.lk/NewUI/new/login.html"
    },
    {
      title: "Group Dashboard",
      description: "Collaborate with team members and manage group activities",
      icon: "👥",
      link: "https://visage.sltdigitallab.lk/NewUI/new/groups/login.html"
    }
  ];

  return (
    <section className="login-selection-section">
      <Container>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >          <div className="breadcrumb-nav">
            <span className="breadcrumb-home" onClick={() => navigate('/')}>Home</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Login</span>
          </div>
          <h1 className="login-selection-title">Choose Your Login</h1>
          <p className="login-selection-subtitle">
            Select the appropriate dashboard for your role
          </p>
        </motion.div>

        <Row className="justify-content-center">          {loginOptions.map((option, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LoginCard {...option} index={index} />
              </motion.div>
            </Col>
          ))}
        </Row>        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-5"
        >
          <div className="info-section">
            <div className="security-notice">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              </svg>
              All connections are secured with SSL encryption
            </div>
            <p className="help-text">
              Need help choosing? <a href="/#contact" className="contact-link" onClick={() => navigate('/#contact')}>Contact our support team</a>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default LoginSelection;
