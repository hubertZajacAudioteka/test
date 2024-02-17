import { getStations } from "@/graphql/stations/getStations";
import Link from "next/link";

export default async function RadioStationsPage() {
  const stations = await getStations();

  console.log('stations', stations?.stations?.content)

  return (
    <div>
      <h2>Wybierz stację</h2>
      <ul>
        {stations.stations?.content?.map((station) => (
          <li key={station?.id}>
            <Link href={`/radio/${station?.id}`}>{station?.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
