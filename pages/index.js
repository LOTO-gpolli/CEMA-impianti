import Head from "next/head";
/* Components */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <div>
        <h1>Main Section</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores aliquam
          expedita exercitationem totam a voluptate dolore, ipsam voluptatem dolores eius
          nobis amet placeat assumenda iste ea incidunt minima magnam.
        </p>
      </div>
      <Footer />
    </>
  );
}
