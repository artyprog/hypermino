import { action, frame, keydown } from "hyperapp-effects";
import actions from "../../../src/modules/main/actions";
const { init, update, incTime, deltaUpdate } = actions;

export default {
  init: {
    "produces the right effects": [
      init(),
      [keydown("player.move"), frame("update")]
    ]
  },
  update: {
    "produces the right effects": [
      update()(9001),
      [action("incTime", 9001), action("deltaUpdate"), frame("update")]
    ]
  },
  incTime: {
    "without previous time": {
      "doesn't update delta": [
        incTime({ time: 0, delta: 0 })(9001),
        {
          delta: 0,
          time: 9001
        }
      ]
    },
    "with previous time": {
      "updates time and delta": [
        incTime({ time: 9001, delta: 0 })(9017),
        {
          delta: 16,
          time: 9017
        }
      ]
    }
  },
  deltaUpdate: {
    "produces the right effects": [
      deltaUpdate({ delta: 16 }),
      action("player.update", 16)
    ]
  }
};
