import {
  GET_META_DATA,
  GET_HERO_DATA,
  GET_SERVICES_DATA, 
  GET_ABOUT_US_DATA,
  GET_PROJECTS_DATA,
  GET_CONTACT_US_DATA,
  GET_FOOTER_DATA,
} from '../queries';
/* Components */
import Meta from '../components/Meta'
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
  const metaData = await retrieveGraphQLData(GET_META_DATA)
  const heroData = await retrieveGraphQLData(GET_HERO_DATA)
  const servicesData = await retrieveGraphQLData(GET_SERVICES_DATA)
  const aboutUsData = await retrieveGraphQLData(GET_ABOUT_US_DATA)
  const projectsData = await retrieveGraphQLData(GET_PROJECTS_DATA)
  const contactUsData = await retrieveGraphQLData(GET_CONTACT_US_DATA)
  const footerData = await retrieveGraphQLData(GET_FOOTER_DATA)
  
  return {
    props: {
      metaData: metaData.meta,
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
  metaData,
  heroData,
  servicesData,
  aboutUsData,
  projectsData,
  contactUsData,
  footerData
}) {
  return (
    <>
      <Meta
        title={metaData.title}
        description={metaData.description}
        keywords={metaData.keywords}
      />
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
      <Gallery
        gallery={{
          title: projectsData.gallery_title,
          images: projectsData.gallery_image
        }}
        subtitle={projectsData.subtitle}
        timeline={projectsData.project_flow}
        title={projectsData.title}
      />
      <Contact
        privacy={contactUsData.privacy_text}
        subjectOptions={contactUsData.mail_subject}
        subtitle={contactUsData.subtitle}
        title={contactUsData.title}
      />
      <Footer legalDiscaimer={footerData.legal_disclaimer} />
    </>
  );
}
