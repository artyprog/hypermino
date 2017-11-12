import { action } from "hyperapp-effects";
import actions from "../../../src/modules/player/actions";
const { update, incDrop, updateDrop, resetDrop, move, position } = actions;

test("update produces the right effects", () =>
  expect(update()(16)).toEqual([action("incDrop", 16), action("updateDrop")]));

test("incDrop updates the dropCounter", () =>
  expect(incDrop({ dropCounter: 1 })(16)).toEqual({ dropCounter: 17 }));

test("updateDrop yields no effects if the dropCounter is less than dropInterval", () =>
  expect(updateDrop({ dropCounter: 1, dropInterval: 1000 })).toBe(false));

test("updateDrop yields the right effects if the dropCounter is greater than dropInterval", () =>
  expect(updateDrop({ dropCounter: 1001, dropInterval: 1000 })).toEqual([
    action("position.down"),
    action("resetDrop")
  ]));

test("resetDrop resets the dropCounter", () =>
  expect(resetDrop({ dropCounter: 1000 })).toEqual({ dropCounter: 0 }));

test("move for left arrow yields the right effect", () =>
  expect(move()({ key: "ArrowLeft" })).toEqual([
    action("position.move", "ArrowLeft")
  ]));

test("move for down arrow yields the right effects", () =>
  expect(move()({ key: "ArrowDown" })).toEqual([
    action("position.move", "ArrowDown"),
    action("resetDrop")
  ]));

test("position.move for left arrow yields the right effect", () =>
  expect(position.move()("ArrowLeft")).toEqual([action("left")]));

test("position.move for right arrow yields the right effect", () =>
  expect(position.move()("ArrowRight")).toEqual([action("right")]));

test("position.move for down arrow yields the right effect", () =>
  expect(position.move()("ArrowDown")).toEqual([action("down")]));

test("position.left correctly updates x position", () =>
  expect(position.left({ x: 1, y: 1 })).toEqual({ x: 0 }));

test("position.right correctly updates x position", () =>
  expect(position.right({ x: 1, y: 1 })).toEqual({ x: 2 }));

test("position.down correctly updates y position", () =>
  expect(position.down({ x: 1, y: 1 })).toEqual({ y: 2 }));
