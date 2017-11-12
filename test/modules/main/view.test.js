import { action, frame, keydown } from "hyperapp-effects";
import view from "../../../src/modules/main/view";
import {
  emptyBoardState,
  emptyBoardView,
  defaultPositionState,
  defaultPositionView,
  movedPositionState,
  movedPositionView
} from "./viewData";

test("empty arena", () =>
  expect(view(emptyBoardState)).toEqual(emptyBoardView));

test("single piece in default position", () =>
  expect(view(defaultPositionState)).toEqual(defaultPositionView));

test("single piece moved down", () =>
  expect(view(movedPositionState)).toEqual(movedPositionView));
