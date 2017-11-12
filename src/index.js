import { app } from "hyperapp";
import { withEffects } from "hyperapp-effects";
import modules from "./modules";

withEffects(app)(modules).init();
