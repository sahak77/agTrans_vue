import utils from "../../utils/commonUtils"
import { setActionResult } from "../../utils/setActionResult"
import {
  ADD_CLIENT_FULFILLED, ADD_CLIENT_PENDING, ADD_CLIENT_REJECTED, GET_CLIENTS_FULFILLED,
  GET_CLIENTS_PENDING, GET_CLIENTS_REJECTED, GET_CLIENT_FULFILLED, GET_CLIENT_PENDING,
  GET_CLIENT_REJECTED, REMOVE_CLIENT_FULFILLED, REMOVE_CLIENT_PENDING, REMOVE_CLIENT_REJECTED,
  UPDATE_CLIENT_FULFILLED, UPDATE_CLIENT_PENDING, UPDATE_CLIENT_REJECTED
} from "../types"

export const clientsMutation = {
  //

  [GET_CLIENTS_PENDING](state) {
    setActionResult('pending', 'get_clients', state.actionResult)
  },
  [GET_CLIENTS_FULFILLED](state, payload) {
    setActionResult('fulfilled', 'get_clients', state.actionResult)
    state.clientsData = [...state.clientsData, ...payload.data]
    state.size = state.size + payload.size;
    state.hasMore = payload.data.length
  },
  [GET_CLIENTS_REJECTED](state, payload) {
    setActionResult('rejected', 'get_clients', state.actionResult)
    utils.printMessage(payload?.response?.data || { message: payload?.message })
  },

  //

  [GET_CLIENT_PENDING](state) {
    setActionResult('pending', GET_CLIENT_PENDING, state.actionResult)
  },
  [GET_CLIENT_FULFILLED](state, payload) {
    setActionResult('fulfilled', GET_CLIENT_FULFILLED, state.actionResult)
    state.getClient = payload.data
    console.log(state.getClient);
  },
  [GET_CLIENT_REJECTED](state, payload) {
    setActionResult('rejected', GET_CLIENT_REJECTED, state.actionResult)
    utils.printMessage(payload?.response?.data || { message: payload?.message })
  },

  //

  [ADD_CLIENT_PENDING](state) {
    setActionResult('pending', ADD_CLIENT_PENDING, state.actionResult)
  },
  [ADD_CLIENT_FULFILLED](state, payload) {
    setActionResult('fulfilled', ADD_CLIENT_FULFILLED, state.actionResult)
    console.log(payload);
  },
  [ADD_CLIENT_REJECTED](state, payload) {
    setActionResult('rejected', ADD_CLIENT_REJECTED, state.actionResult)
    utils.printMessage(payload?.response?.data || { message: payload?.message })
  },

  //

  [REMOVE_CLIENT_PENDING](state) {
    setActionResult('pending', REMOVE_CLIENT_PENDING, state.actionResult)
  },
  [REMOVE_CLIENT_FULFILLED](state, payload) {
    setActionResult('fulfilled', REMOVE_CLIENT_FULFILLED, state.actionResult)
    console.log(payload);
  },
  [REMOVE_CLIENT_REJECTED](state, payload) {
    setActionResult('rejected', REMOVE_CLIENT_REJECTED, state.actionResult)
    utils.printMessage(payload?.response?.data || { message: payload?.message })
  },

  //

  [UPDATE_CLIENT_PENDING](state) {
    setActionResult('pending', UPDATE_CLIENT_PENDING, state.actionResult)
  },
  [UPDATE_CLIENT_FULFILLED](state, payload) {
    setActionResult('fulfilled', UPDATE_CLIENT_FULFILLED, state.actionResult)
    console.log(payload);
  },
  [UPDATE_CLIENT_REJECTED](state, payload) {
    setActionResult('rejected', UPDATE_CLIENT_REJECTED, state.actionResult)
    utils.printMessage(payload?.response?.data || { message: payload?.message })
  },
  /////////


  clearClientsData(state) {
    state.clientsData = []
  }

}
