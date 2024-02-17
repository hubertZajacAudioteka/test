// @ts-nocheck

"use client";

import { PlayerConfig } from "@/configs/playerConfig";
import React, { useEffect, useRef } from "react";

interface Props {
  playerConfig: PlayerConfig;
  url?: string;
}

const Player = ({ playerConfig, url }: Props) => {
  const playerContainer = useRef<HTMLDivElement>(null);
  const player = useRef(null);

  if (url) {
    playerConfig.url = url;
  }

  useEffect(() => {
    window.WP?.push(() => {
      window.WP?.player(playerConfig);
      window.WP?.player?.setClipData({ streamType: "audio" });
    });

    console.log(playerConfig)
  }, []);

  return (
    <div ref={playerContainer} id="ofm-player">
      Player
      <button>Change</button>
    </div>
  );
};

export default Player;
