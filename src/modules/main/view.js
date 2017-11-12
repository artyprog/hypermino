import { h } from "hyperapp";

const svg = h.bind(null, "svg");
const rect = h.bind(null, "rect");

const Tetromino = ({ grid = [], x = 0, y = 0 }) =>
  grid.reduce(
    (rows, row, offsetY) =>
      rows.concat(
        row.map(
          (value, offsetX) =>
            value === 1 &&
            rect({
              transform: "scale(20)",
              x: x + offsetX,
              y: y + offsetY,
              width: 1,
              height: 1,
              fill: "red"
            })
        )
      ),
    []
  );

export default ({ player: { active, position } }) =>
  svg(
    {
      width: 240,
      height: 400,
      style: {
        background: "black"
      }
    },
    Tetromino({ grid: active, ...position })
  );
