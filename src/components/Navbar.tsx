import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import logo from '../images/logo.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance on scroll
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position (only on home page)
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'subscriptions', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, location.pathname]);const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = document.querySelector('.custom-navbar')?.clientHeight || 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = document.querySelector('.custom-navbar')?.clientHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };  const handleLoginClick = () => {
    if (location.pathname === '/login') {
      // If we're on login page, go back to home
      navigate('/');
    } else {
      // Navigate to the login selection page
      navigate('/login');
    }
  };
  return (
    <>
      <Navbar 
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled || location.pathname !== '/' ? 'scrolled' : ''}`}
      ><Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Visage Logo" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link 
                onClick={() => scrollToSection('home')} 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                onClick={() => scrollToSection('about')} 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </Nav.Link>
              <Nav.Link 
                onClick={() => scrollToSection('subscriptions')} 
                className={`nav-link ${activeSection === 'subscriptions' ? 'active' : ''}`}
              >
                Subscriptions
              </Nav.Link>
              <Nav.Link 
                onClick={() => scrollToSection('contact')} 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </Nav.Link>
            </Nav>
            <AnimatePresence>
              <motion.div 
                className="auth-buttons"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >                <Button 
                  variant="outline-light" 
                  className="login-btn"
                  onClick={handleLoginClick}
                >
                  {location.pathname === '/login' ? 'Back to Home' : 'Login'}
                </Button>
              </motion.div>
            </AnimatePresence>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;