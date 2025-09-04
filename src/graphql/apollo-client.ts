import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// TODO: Replace with your GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "https://report.development.opexa.io/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from wherever you store it
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyeDYzclJQVVc0UFdLVXpkUm8iLCJyb2xlIjoiT1BFUkFUT1IiLCJqdGkiOiI5YzE3NTE3NDkyZGVjMjM4NDk4YmUwMTMiLCJpcEFkZHJlc3MiOiIxNTguNjIuNjUuMjciLCJsb2NhdGlvbiI6IkNhZ2F5YW4gZGUgT3JvLCBQaGlsaXBwaW5lcyIsInBsYXRmb3JtIjoiMTJ1d3VSQ2NZcDFjV2lYelBZIiwic3RhdHVzIjoiQUNUSVZFIiwiaWFwIjoiMjAyNS0wOS0wNFQxMDo1MTo0MS4zMjArMDA6MDAiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzU2OTgzMTMxLCJleHAiOjE3NTcwNjk1MzF9.bqw2jhpwOPKN3R2GfgUN64gtlZ7a1T_KsYd87h4CRtY";

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
