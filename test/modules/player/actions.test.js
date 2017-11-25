import { action } from "hyperapp-effects";
import actions from "../../../src/modules/player/actions";
const { update, incDrop, updateDrop, resetDrop, move, position } = actions;

export default {
  update: {
    "produces the right effects": [
      update()(16),
      [action("incDrop", 16), action("updateDrop")]
    ]
  },
  incDrop: {
    "updates the dropCounter": [
      incDrop({ dropCounter: 1 })(16),
      { dropCounter: 17 }
    ]
  },
  updateDrop: {
    "yields no effects if the dropCounter is less than dropInterval": [
      updateDrop({ dropCounter: 1, dropInterval: 1000 }),
      false
    ],
    "yields the right effects if the dropCounter is greater than dropInterval": [
      updateDrop({ dropCounter: 1001, dropInterval: 1000 }),
      [action("position.down"), action("resetDrop")]
    ]
  },
  resetDrop: {
    "resets the dropCounter": [
      resetDrop({ dropCounter: 1000 }),
      { dropCounter: 0 }
    ]
  },
  move: {
    "for left arrow": {
      "yields the right effect": [
        move()({ key: "ArrowLeft" }),
        [action("position.move", "ArrowLeft")]
      ]
    },
    "for down arrow": {
      "yields the right effects": [
        move()({ key: "ArrowDown" }),
        [action("position.move", "ArrowDown"), action("resetDrop")]
      ]
    }
  },
  position: {
    ".move": {
      "for left arrow": {
        "yields the right effect": [
          position.move()("ArrowLeft"),
          [action("left")]
        ]
      },
      "for right arrow": {
        "yields the right effect": [
          position.move()("ArrowRight"),
          [action("right")]
        ]
      },
      "for down arrow": {
        "yields the right effect": [
          position.move()("ArrowDown"),
          [action("down")]
        ]
      }
    },
    ".left correctly updates x position": [
      position.left({ x: 1, y: 1 }),
      { x: 0 }
    ],
    ".right correctly updates x position": [
      position.right({ x: 1, y: 1 }),
      { x: 2 }
    ],
    ".down correctly updates y position": [
      position.down({ x: 1, y: 1 }),
      { y: 2 }
    ]
  }
};
