// @ts-nocheck

"use client";

import { playerConfig } from "@/configs/playerConfig";
import React, { useEffect, useRef } from "react";

interface Props {
  stations: GetStationsQuery;
}

const Player = ({ stations }: Props) => {
  const playerContainer = useRef<HTMLDivElement>(null);
  const player = useRef(null);

  // useEffect(() => {
  //   // @ts-ignore
  //   player.current =
  //     //@ts-ignore
  //     window.WP?.player &&
  //     //@ts-ignore
  //     window.WP?.player({
  //       target: `#ofm-player`,
  //       url: "http://get.wp.tv/?mid=1754079",
  //       customShakaVersion: "4.1.2",
  //       floatingplayer: false,
  //     });

  //   return () => {
  //     try {
  //       //@ts-ignore
  //       player?.current?.destroy();
  //     } catch (ex) {}
  //   };
  // }, []);

  useEffect(() => {
    window.WP?.push(() => {
      window.WP.player(playerConfig);
    });
    console.log(window.WP?.player);
  }, []);

  console.log("STATIONS", stations);

  return (
    <div ref={playerContainer} id="ofm-player">
      Player
      <button>Change</button>
    </div>
  );
};

export default Player;
