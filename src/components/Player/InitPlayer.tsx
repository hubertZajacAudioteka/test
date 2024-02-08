// @ts-nocheck
"use client";

const defaultConfig = {
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
};

function readyPromise() {
  if (window.WP?.player?.initialized) {
    const instance = WP?.player?.list?.find(
      (item) => item?.p?.initialTarget === "ofm-player"
    );

    if (instance) {
      return Promise.resolve(instance);
    }
  }
}

function initPromise({ config, events = {} } = {}) {
  const { INIT: initCallback, ...callbacks } = events;

  return new Promise((resolve) => {
    window.WP.push(function () {
      const player = window.WP.player({ ...defaultConfig, ...config });

      player.on("INIT", function () {
        initCallback?.();
        player.togglePause();
        resolve(player);
        window.WP.player.ofm = player;

        const actionHandlers = [
          [
            "play",
            () => {
              player?.togglePause();
              navigator.mediaSession.playbackState = "playing";
            },
          ],
          [
            "pause",
            () => {
              player?.togglePause();
              navigator.mediaSession.playbackState = "paused";
            },
          ],
          [
            "stop",
            () => {
              player?.togglePause();
              navigator.mediaSession.playbackState = "paused";
            },
          ],
        ];

        for (const [action, handler] of actionHandlers) {
          try {
            navigator.mediaSession.setActionHandler(action, handler);
          } catch (error) {
            console.log(
              `The media session action "${action}" is not supported yet.`
            );
          }
        }
      });

      for (let [type, callback] of Object.entries(callbacks)) {
        player.on(type, callback);
      }

      try {
        navigator.mediaSession.playbackState = "paused";
      } catch (ex) {}
    });
  });
}

function playerGenerator() {
  let promise;

  return function (opt) {
    if (!promise) {
      promise = readyPromise() ?? initPromise(opt);
    }

    return promise;
  };
}

export default playerGenerator();
