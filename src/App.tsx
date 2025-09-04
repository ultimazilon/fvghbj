import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';
import AgentDirectory from './components/AgentDirectory';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <SuccessStories />
      <AgentDirectory />
      <Testimonials />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;