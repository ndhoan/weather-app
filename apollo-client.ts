import { ApolloClient, InMemoryCache } from '@apollo/client';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  if (client) return client;

  client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      authorization: `apiKey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
  });

  return client;
};