import { action, frame, keydown } from "hyperapp-effects";
import actions from "../../../src/modules/main/actions";
const { init, update, incTime, deltaUpdate } = actions;

test("init produces the right effects", () =>
  expect(init()).toEqual([keydown("player.move"), frame("update")]));

test("update produces the right effects", () =>
  expect(update()(9001)).toEqual([
    action("incTime", 9001),
    action("deltaUpdate"),
    frame("update")
  ]));

test("incTime without previous time doesn't update delta", () =>
  expect(incTime({ time: 0, delta: 0 })(9001)).toEqual({
    delta: 0,
    time: 9001
  }));

test("incTime with previous time updates time and delta", () =>
  expect(incTime({ time: 9001, delta: 0 })(9017)).toEqual({
    delta: 16,
    time: 9017
  }));

test("deltaUpdate produces the right effects", () =>
  expect(deltaUpdate({ delta: 16 })).toEqual(action("player.update", 16)));
