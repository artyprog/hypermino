import { h } from "hyperapp";

export const emptyBoardState = { player: {} };
export const emptyBoardView = h("svg", {
  width: 240,
  height: 400,
  style: {
    background: "black"
  }
});

const block = (x, y) =>
  h("rect", {
    transform: "scale(20)",
    x,
    y,
    width: 1,
    height: 1,
    fill: "red"
  });

export const defaultPositionState = {
  player: { active: [[0, 0, 0], [1, 1, 1], [0, 1, 0]] }
};
export const defaultPositionView = h(
  "svg",
  {
    width: 240,
    height: 400,
    style: {
      background: "black"
    }
  },
  block(0, 1),
  block(1, 1),
  block(2, 1),
  block(1, 2)
);

export const movedPositionState = {
  player: {
    position: { x: 5, y: 0 },
    active: [[0, 0, 0], [1, 1, 1], [0, 1, 0]]
  }
};
export const movedPositionView = h(
  "svg",
  {
    width: 240,
    height: 400,
    style: {
      background: "black"
    }
  },
  block(5, 1),
  block(6, 1),
  block(7, 1),
  block(6, 2)
);
