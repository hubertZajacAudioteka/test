export interface PlayerConfig {
  adv: boolean;
  autoplay: boolean;
  advVastDuration: number;
  capping: number;
  customShakaVersion: string;
  floatingplayer: boolean;
  forceautoplay: boolean;
  forcesound: boolean;
  hiderelated: boolean;
  hlsThroughShaka: boolean;
  mediaBrandId: number;
  mediaEmbed: string;
  mediaTreeId: number[];
  pushStreamDisabled: boolean;
  skin: string;
  target: string;
  statid:string;
  url:string;
}

export const playerConfig: PlayerConfig = {
  adv: true,
  autoplay: false,
  advVastDuration: 60,
  capping: 1,
  customShakaVersion: "4.6.0",
  floatingplayer: false,
  forceautoplay: false,
  forcesound: true,
  hiderelated: true,
  hlsThroughShaka: true,
  mediaBrandId: 5,
  mediaEmbed: "radio",
  mediaTreeId: [5],
  pushStreamDisabled: true,
  skin: "skinDefault",
  target: `#ofm-player`,
  statid:'test',
  // url:'http://get.wp.tv/?mid=1754079'
  url:'https://openfm-stream-devel.kube.dev.dcwp.pl/OFM96/ngrp:standard/playlist.m3u8'
};
