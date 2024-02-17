import Player from "@/components/Player/Player";
import { PlayerConfig, playerConfig } from "@/configs/playerConfig";
import { getStation } from "@/graphql/stations/getStation";

export default async function RadioPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getStation(Number(params.id));
  const config: PlayerConfig = playerConfig;
  const url = data?.station?.streamUrl!;

  console.log("START", data);

  return (
    <div>
      <h2> działa</h2>
      <Player playerConfig={playerConfig} url={url} />
    </div>
  );
}
