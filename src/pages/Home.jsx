import React from 'react';
import AboutSection from '../components/AboutSection';
import Banner from '../components/Banner';
import ServicesSection from '../components/ServicesSection';
import Testimonial from '../components/Testimonial';
import Wrapper from '../components/Wrapper';

function Home() {
  return (
    <Wrapper>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <Testimonial />
    </Wrapper>
  );
}

export default Home;
