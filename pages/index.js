/* Components */
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Timeline from '../components/Timeline/Timeline';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
