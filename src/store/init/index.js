import { DEFAULT_ACTION_RESULT } from "../../constants";
import { action } from "./action";
import { initMutations } from "./mutation";

export const initSlice = {
  state: {
    actionResult: DEFAULT_ACTION_RESULT,
    token: localStorage.getItem('access_token') || null,
  },
  mutations: initMutations,
  actions: action,
  getters: {
    
  }
}