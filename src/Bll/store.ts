import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../util/localStorage";

const rootReducer = combineReducers({
  counter: counterReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, loadState())
store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  });
});
export type AppStoreType = typeof store
