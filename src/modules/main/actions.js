import { action, frame, keydown, log } from "hyperapp-effects";

export default {
  init: () => [keydown("player.move"), frame("update")],
  update: time => [
    action("incTime", time),
    action("deltaUpdate"),
    frame("update")
  ],
  incTime: time => ({ time: lastTime, delta: lastDelta }) => ({
    time: time,
    delta: time && lastTime ? time - lastTime : lastDelta
  }),
  deltaUpdate: () => ({ delta }) => action("player.update", delta)
};
