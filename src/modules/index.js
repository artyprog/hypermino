import { state as mainState, actions as mainActions, view } from "./main";
import { state as playerState, actions as playerActions } from "./player";

export default [
  { ...mainState, player: playerState },
  { ...mainActions, player: playerActions },
  view
];
