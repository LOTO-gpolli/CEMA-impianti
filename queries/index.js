import { gql } from '@apollo/client'

export const GET_HERO_DATA = gql`
query GetHeroData {
  hero_section(where: {id: "cl2bqd6qx2uz90bunzlzgd46j"}) {
    title
    subtitle
    services
  }
}
`

export const GET_SERVICES_DATA = gql`
  query GetServicesData {
    services_section(where: { id: "cl2bqwf4p2nbv0buo3u2em6y1" }) {
      title
      subtitle
      services_cards {
        title
        description
      }
      imq_certification {
        title
        description
      }
    }
  }
`

export const GET_ABOUT_US_DATA = gql`
  query GetAboutUsData {
    about_us_section(where: { id: "cl2c2jiyp8d270aunsbdiikn1" }) {
      title
      subtitle
      storyline {
        title
        description
        image {
          id
        }
      }
      gallery_title
      team_cards {
        name
        role
        image {
          id
        }
      }
    }
  }
`

export const GET_PROJECTS_DATA = gql`
  query GetProjectsData {
    projects_section(where: { id: "cl2c2ntsk8elm0aun925itntc" }) {
      title
      subtitle
      project_flow {
        title
        description
        image {
          id
        }
      }
      gallery_title
      immagine {
        id
      }
    }
  }
`

export const GET_CONTACT_US_DATA = gql`
  query GetContactUsData {
    contact_us_section(where: { id: "cl2c2ro8a7sep0bunqzogg53n" }) {
      title
      subtitle
      mail_subject
      privacy_text
    }
  }
`

export const GET_FOOTER_DATA = gql`
  query GetFooterData {
    footer_section(where: { id: "cl2c2sg117slz0bunhp425m8d" }) {
      legal_disclaimer
    }
  }
`
