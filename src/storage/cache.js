import { setState } from "./storage";
import { SET_FRIENDS } from "../store/mutations.type";

const shouldSkipCache = type => {
  return type !== SET_FRIENDS;
};

const plugin = store => {
  store.subscribe(({type}, state) => {
    if (!shouldSkipCache(type)) {
      setState(type, state).catch(err => console.warn("failed to cache state", err));
    }
  });
};

export default plugin;