import { API_URL } from "@/constants/api";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientApollo = () => {
  return new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });
};

export const client = clientApollo();
