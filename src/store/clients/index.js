import { DEFAULT_ACTION_RESULT } from "../../constants";
import { clientAction } from "./action";
import { clientsMutation } from "./mutation";

export const clientsSlice = {
  state: {
    actionResult: DEFAULT_ACTION_RESULT,
    clientsData: [],
    hasMore: true,
    size: 0,
    getClient: {},
  },
  mutations: clientsMutation,
  actions: clientAction,
    getters: {
      getClient (state) {
        return state.getClient
      }
    }
  
}