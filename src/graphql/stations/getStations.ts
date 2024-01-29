import { client } from "../client";
import { gql } from "@/graphql/__generated__";

export const getStations = async () => {
  const { data } = await client.query({
    query: gql(`
      query getStations {
        stations {
          content {
            id
            name
            description
          }
        }
      }
    `),
  });

  return data;
};
