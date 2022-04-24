import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl2bpy9hm3qu901yw6if4azr7/master",
  cache: new InMemoryCache(),
})

export default client