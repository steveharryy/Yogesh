import React from 'react';
import Hero from '../components/Hero';
import OurGems from '../components/OurGems';
import Faculty from '../components/Faculty';
import Results from '../components/Results';
import GoogleReviews from '../components/GoogleReviews';
import VoicesOfSuccess from '../components/VoicesOfSuccess';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <OurGems />
    
      <Results />
      <GoogleReviews />
      <VoicesOfSuccess />
      <Resources />
      <Contact />
    </>
  );
};

export default HomePage;