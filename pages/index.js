import Head from "next/head";
/* Components */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import CardsList from "../components/CardsList/CardsList";
import About from "../components/About/About";
import Form from "../components/Form/Form";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardsList />
      <About />
      <Gallery />
      <Form />
      <Footer />
    </>
  );
}
