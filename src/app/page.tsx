import { getStations } from "@/graphql/stations/getStations";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const data = await getStations();
  return <div>
    <div>
      <h2>Stacje muzyczne</h2>
      {
        data.stations?.content.map(station=>(
          <Link href={`/${station?.id}`} key={station?.id}>{station?.name}</Link>
        ))
      }
    </div>
  </div>;
};

export default Home;
