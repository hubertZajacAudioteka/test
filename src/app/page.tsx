import { getStations } from "@/graphql/stations/getStations";
import React from "react";

const Home = async () => {
  const data = await getStations();
  return <div>Home</div>;
};

export default Home;
