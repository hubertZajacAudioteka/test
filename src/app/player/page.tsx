import Player from "@/components/Player/Player";
import { getStations } from "@/graphql/stations/getStations";

export default async function PlayerPage() {
  const stations = await getStations();

  return (
    <div>
      <h2>Player</h2>
      {/* <Player /> */}
    </div>
  );
}
