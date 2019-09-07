import { combineReducers } from "redux";

import authReducer from "./auth";
import channelsReducer from "./channels";
import editorReducer from "./editor";

const rootReducer = combineReducers({
  auth: authReducer,
  channels: channelsReducer,
  editor: editorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
