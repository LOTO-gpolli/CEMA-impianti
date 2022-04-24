import client from '../apolloClient'
import {
  GET_HERO_DATA,
  GET_SERVICES_DATA, 
  GET_ABOUT_US_DATA,
  GET_PROJECTS_DATA,
  GET_CONTACT_US_DATA,
  GET_FOOTER_DATA,
} from '../queries';
/* Components */
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import MobilePhoneButton from '../components/MobilePhoneButton/MobilePhoneButton';

export const getStaticProps = async () => {
  const { data: heroData, loading: heroLoading } = await client.query({ query: GET_HERO_DATA })
  const { data: servicesData, loading: servicesLoading } = await client.query({ query: GET_SERVICES_DATA })
  const { data: aboutUsData, loading: aboutUsLoading } = await client.query({ query: GET_ABOUT_US_DATA })
  const { data: projectsData, loading: projectsLoading } = await client.query({ query: GET_PROJECTS_DATA })
  const { data: contactUsData, loading: contactUsLoading } = await client.query({ query: GET_CONTACT_US_DATA })
  const { data: footerData, loading: footerLoading } = await client.query({ query: GET_FOOTER_DATA })
  
  return {
    props: {
      heroSection: {
        data: heroData.hero_section,
        loading: heroLoading
      },
      servicesSection: {
        data: servicesData.services_section,
        loading: servicesLoading,
      },
      aboutUsSection: {
        data: aboutUsData.about_us_section,
        loading: aboutUsLoading,
      },
      projectsSection: {
        data: projectsData.projects_section,
        loading: projectsLoading,
      },
      contactUsSection: {
        data: contactUsData.contact_us_section,
        loading: contactUsLoading,
      },
      footerSection: {
        data: footerData.footer_section,
        loading: footerLoading,
      },
    }
  }
}

export default function Home({
  heroSection,
  servicesSection,
  aboutUsSection,
  projectsSection,
  contactUsSection,
  footerSection
}) {
  console.log('heroSection:', heroSection)
  console.log('servicesSection:', servicesSection)
  console.log('aboutUsSection:', aboutUsSection)
  console.log('projectsSection:', projectsSection)
  console.log('contactUsSection:', contactUsSection)
  console.log('footerSection:', footerSection)

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
