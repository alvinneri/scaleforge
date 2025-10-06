import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://report.development.opexa.io/graphql",
});

let cachedToken: string | null = null;

const getAccessToken = async (): Promise<string> => {
  if (cachedToken) return cachedToken;

  const response = await fetch(
    "https://auth.development.opexa.io/sessions?ttl=24h",
    {
      method: "POST",
      headers: {
        authorization:
          "Basic YmFieWVuZ2luZWVyOjVlODg0ODk4ZGEyODA0NzE1MWQwZTU2ZjhkYzYyOTI3NzM2MDNkMGQ2YWFiYmRkNjJhMTFlZjcyMWQxNTQyZDg=",
        "platform-code": "Z892",
        role: "OPERATOR",
      },
    }
  );

  const data = await response.json();
  cachedToken = data.accessToken;
  return cachedToken || "";
};

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from wherever you store it
  const token = await getAccessToken();

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
