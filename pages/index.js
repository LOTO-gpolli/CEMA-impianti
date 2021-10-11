/* Components */
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CardsList from '../components/CardsList/CardsList';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import Timeline from '../components/Timeline/Timeline';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Copyright from '../components/Copyright/Copyright';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardsList />
      <About />
      <Team />
      <Timeline />
      <ContactForm />
      <Footer />
      <Copyright />
    </>
  );
}
