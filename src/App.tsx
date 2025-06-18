import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import Subscriptions from './components/Subscriptions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginSelection from './components/LoginSelection';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />        <Routes>
          <Route path="/" element={
            <>
              <Hero />
             
              <About />
              <Subscriptions />
              <Contact />
            </>
          } />
          <Route path="/login" element={
            <>
              <LoginSelection />
            </>
          } />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
