import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import OurGems from '../components/OurGems';
import ShiningStars from '../components/ShiningStars';
import GoogleReviews from '../components/GoogleReviews';
import VoicesOfSuccess from '../components/VoicesOfSuccess';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <OurGems />
      <ShiningStars />
      <GoogleReviews />
      <VoicesOfSuccess />
      <Resources />
      <Contact />
    </>
  );
};

export default HomePage;