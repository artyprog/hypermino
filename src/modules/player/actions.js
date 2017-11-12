import { action, log } from "hyperapp-effects";
import effectsIf from "../../effectsIf";

export default {
  update: () => delta => [action("incDrop", delta), action("updateDrop")],
  incDrop: ({ dropCounter }) => delta => ({
    dropCounter: dropCounter + delta
  }),
  updateDrop: ({ dropCounter, dropInterval }) =>
    dropCounter > dropInterval && [
      action("position.down"),
      action("resetDrop")
    ],
  resetDrop: () => ({ dropCounter: 0 }),
  move: () => ({ key }) =>
    effectsIf([
      [true, action("position.move", key)],
      [key === "ArrowDown", action("resetDrop")]
    ]),
  position: {
    move: () => key =>
      effectsIf([
        [key === "ArrowLeft", action("left")],
        [key === "ArrowRight", action("right")],
        [key === "ArrowDown", action("down")]
      ]),
    left: ({ x }) => ({ x: x - 1 }),
    right: ({ x }) => ({ x: x + 1 }),
    down: ({ y }) => ({ y: y + 1 })
  }
};
