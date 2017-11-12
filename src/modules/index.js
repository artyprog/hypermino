import { state as mainState, actions as mainActions, view } from "./main";
import { state as playerState, actions as playerActions } from "./player";

export default {
  state: { ...mainState, player: playerState },
  view,
  actions: { ...mainActions, player: playerActions }
};
