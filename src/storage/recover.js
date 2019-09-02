import { getState } from "./storage";

export const recoverState = async stateName => await getState(stateName.toLowerCase());
