import Head from "next/head";
/* Components */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import CardsList from "../components/CardsList/CardsList";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardsList />
      <About />
      <Footer />
    </>
  );
}
