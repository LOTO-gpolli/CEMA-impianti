import Head from "next/head";
/* Components */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div>Main App</div>
      <Footer />
    </>
  );
}
