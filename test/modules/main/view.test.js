import view from "../../../src/modules/main/view";
import {
  emptyBoardState,
  emptyBoardView,
  defaultPositionState,
  defaultPositionView,
  movedPositionState,
  movedPositionView
} from "./viewData";

export default {
  "empty arena": [view(emptyBoardState), emptyBoardView],
  "single piece in default position": [
    view(defaultPositionState),
    defaultPositionView
  ],
  "single piece moved down": [view(movedPositionState), movedPositionView]
};
