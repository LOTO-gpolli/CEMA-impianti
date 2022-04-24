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
/* Helpers */
import { retrieveGraphQLData } from '../helpers/utils';

export const getStaticProps = async () => {
  const heroData = await retrieveGraphQLData(GET_HERO_DATA)
  const servicesData = await retrieveGraphQLData(GET_SERVICES_DATA)
  const aboutUsData = await retrieveGraphQLData(GET_ABOUT_US_DATA)
  const projectsData = await retrieveGraphQLData(GET_PROJECTS_DATA)
  const contactUsData = await retrieveGraphQLData(GET_CONTACT_US_DATA)
  const footerData = await retrieveGraphQLData(GET_FOOTER_DATA)
  
  return {
    props: {
      heroData: heroData.hero_section,
      servicesData: servicesData.services_section,
      aboutUsData: aboutUsData.about_us_section,
      projectsData: projectsData.projects_section,
      contactUsData: contactUsData.contact_us_section,
      footerData: footerData.footer_section,
    }
  }
}

export default function Home({
  heroData,
  servicesData,
  aboutUsData,
  projectsData,
  contactUsData,
  footerData
}) {
  console.log('projectsData:', projectsData)
  console.log('contactUsData:', contactUsData)

  return (
    <>
      <Header />
      <MobilePhoneButton />
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        services={heroData.services}
      />
      <Services
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        services={servicesData.services_cards}
        imqCertification={servicesData.imq_certification}
      />
      <About
        title={aboutUsData.title}
        subtitle={aboutUsData.subtitle}
        storyline={aboutUsData.storyline}
        team={{
          title: aboutUsData.gallery_title,
          members: aboutUsData.team_cards
        }}/>
      <Gallery data={projectsData} />
      <Contact data={contactUsData} />
      <Footer legalDiscaimer={footerData.legal_disclaimer} />
    </>
  );
}
