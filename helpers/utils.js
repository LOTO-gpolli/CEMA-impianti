import client from '../apolloClient'

export const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') return string;
  
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const retrieveGraphQLData = async (query) => {
  const response = await client.query({ query })

  return response.data
} 