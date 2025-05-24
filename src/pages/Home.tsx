import React from 'react';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Team from '../components/Team';
import Stats from '../components/Stats';
import Services from '../components/Services';
import ProjectShowcase from '../components/ProjectShowcase';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Customers from '../components/Customers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Advantages />
        <Team />
        <Stats />
        <Services />
        <ProjectShowcase />
        <Testimonials />
        <Gallery />
        <Customers />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;