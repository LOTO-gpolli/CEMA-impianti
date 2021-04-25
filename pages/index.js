import Head from 'next/head'
/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div>
        Main App
      </div>
      <Footer />
    </>
  )
}
