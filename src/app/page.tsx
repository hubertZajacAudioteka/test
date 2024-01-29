import { getStations } from "@/graphql/stations/getStations";
import React from "react";

const Home = async () => {
  const data = await getStations();
  console.log(data);
  console.log(data?.stations?.content);
  return <div>Home</div>;
};

export default Home;
