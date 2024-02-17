import { client } from "../client";
import { gql } from "@/graphql/__generated__";

export const getStation = async (id: number) => {
  const { data } = await client.query({
    query: gql(`
      query GetStation($id: Int!) {
        station(id: $id) {
          name
          slug
          streamUrl
          currentSong
          playlist {
            title
            length
            album {
              title
            }
            artists {
              id
              name
            }
          }
        }
      }
    `),
    variables: { id },
  });

  return data;
};
