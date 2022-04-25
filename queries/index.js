import { gql } from '@apollo/client'

export const GET_META_DATA = gql`
query GetMetaData {
  meta(where: {id: "cl2esjbhk0h0u0bur5beoe1j6"}) {
    title
    description
    keywords
  }
}
`

export const GET_HERO_DATA = gql`
query GetHeroData {
  hero_section(where: {id: "cl2bqd6qx2uz90bunzlzgd46j"}) {
    services
    subtitle
    title
  }
}
`

export const GET_SERVICES_DATA = gql`
  query GetServicesData {
    services_section(where: { id: "cl2bqwf4p2nbv0buo3u2em6y1" }) {
      imq_certification {
        description
        title
      }
      services_cards {
        icon {
          id
          url
        }
        description
        title
      }
      subtitle
      title
    }
  }
`

export const GET_ABOUT_US_DATA = gql`
  query GetAboutUsData {
    about_us_section(where: { id: "cl2c2jiyp8d270aunsbdiikn1" }) {
      gallery_title
      storyline {
        description
        id
        image {
          url
        }
        title
      }
      subtitle
      team_cards {
        id
        image {
          url
        }
        name
        role
      }
      title
    }
  }
`

export const GET_PROJECTS_DATA = gql`
  query GetProjectsData {
    projects_section(where: { id: "cl2c2ntsk8elm0aun925itntc" }) {
      gallery_image {
        id
        url
      }
      gallery_title
      project_flow {
        description
        id
        image {
          url
        }
        title
      }
      subtitle
      title
    }
  }
`

export const GET_CONTACT_US_DATA = gql`
  query GetContactUsData {
    contact_us_section(where: { id: "cl2c2ro8a7sep0bunqzogg53n" }) {
      mail_subject
      privacy_text
      subtitle
      title
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
