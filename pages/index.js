import { useEffect, useState } from 'react';
/* Components */
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import MobilePhoneButton from '../components/MobilePhoneButton/MobilePhoneButton';

export default function Home() {
  return (
    <>
      <Header />
      <MobilePhoneButton />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
