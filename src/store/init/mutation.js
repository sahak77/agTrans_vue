import { PATHS } from "../../constants";
import router from "../../router";
import utils from "../../utils/commonUtils";
import { setActionResult } from "../../utils/setActionResult";

import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from "../types";

export const initMutations = {
  // login
  [LOGIN_PENDING](state) {
    setActionResult('pending', 'login', state.actionResult)
  },
  [LOGIN_FULFILLED](state, payload) {
    setActionResult('fulfilled', 'login', state.actionResult)
    localStorage.setItem('token', payload.data.token)
    localStorage.setItem('id', payload.data.id)
    router.push(PATHS.ORDERS)
  },
  [LOGIN_REJECTED](state, payload) {
    setActionResult('rejected', 'login', state.actionResult)
    utils.printMessage(payload?.response?.data || { message: payload?.message })
  },
  /// logOut 

  logOut(state) {
    state.token = null;
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    router.push(PATHS.LOGIN)
  }
}