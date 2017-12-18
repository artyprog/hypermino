import { h } from "hyperapp";

const svgProps = {
  viewBox: "0 0 240 400",
  style: {
    background: "black",
    height: "100vh"
  }
};

export const emptyBoardState = { player: {} };
export const emptyBoardView = h("svg", svgProps);

const block = (x, y) =>
  h("rect", {
    transform: "scale(20)",
    x,
    y,
    width: 0.95,
    height: 0.95,
    fill: "red"
  });

export const defaultPositionState = {
  player: { active: [[0, 0, 0], [1, 1, 1], [0, 1, 0]] }
};
export const defaultPositionView = h(
  "svg",
  svgProps,
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
  svgProps,
  block(5, 1),
  block(6, 1),
  block(7, 1),
  block(6, 2)
);
