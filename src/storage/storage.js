import localForage from "localforage";
import { SET_FRIENDS, SET_NOTES } from "../store/mutations.type";

const prefix = "friends-hq";
const storage = localForage.createInstance({
  name: "friendHQ"
});

const mapStateForCache = (type, state) => {
  let returnValue = { storeKey: null, value: null };
  switch (type) {
    case SET_FRIENDS:
      returnValue = {
        storeKey: `${prefix}-home`,
        value: state.home
      };
      break;
    case SET_NOTES:
        returnValue = {
            storeKey: `${prefix}-notes`,
            value: state.notes
        }
  }

  return returnValue;
};

export const setState = (type, state) => {
  return new Promise(resolve => {
    const { storeKey, value } = mapStateForCache(type, state);
    if (storeKey) {
      return storage.setItem(storeKey, value);
    } else {
      resolve();
    }
  });
};

export const getState = async storeKey => await storage.getItem(`${prefix}-${storeKey}`);
export const deleteState = async storeKey => await storage.removeItem(`${prefix}-${storeKey}`);
