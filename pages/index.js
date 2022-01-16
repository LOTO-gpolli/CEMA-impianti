import { useEffect, useState } from 'react';
/* Components */
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Timeline from '../components/Timeline/Timeline';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import MobilePhoneButton from '../components/MobilePhoneButton/MobilePhoneButton';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (document?.location?.search?.includes('showGallery=true')) {
      setShowGallery(true);
    }
  });

  return (
    <>
      <Header />
      <MobilePhoneButton />
      <Hero />
      <Services />
      <About />
      {/* {showGallery && <Timeline />} */}
      <Contact />
      <Footer />
    </>
  );
}
