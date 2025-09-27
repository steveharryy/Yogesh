import React from 'react';
import Hero from '../components/Hero';
import Results from '../components/Results';
import GoogleReviews from '../components/GoogleReviews';
import VoicesOfSuccess from '../components/VoicesOfSuccess';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Results />
      <GoogleReviews />
      <VoicesOfSuccess />
      <Resources />
      <Contact />
    </>
  );
};

export default HomePage;