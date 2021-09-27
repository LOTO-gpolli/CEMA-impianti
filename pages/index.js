/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import CardsList from '../components/CardsList/CardsList';
import About from '../components/About/About';
import Copyright from '../components/Copyright/Copyright';
import Team from '../components/Team/Team';
import Timeline from '../components/Timeline/Timeline';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardsList />
      <About />
      <Team />
      <Timeline />
      <Footer />
      <Copyright />
    </>
  );
}
