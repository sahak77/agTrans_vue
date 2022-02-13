import { request } from "../../services/Request";
import { ADD_CLIENT_FULFILLED, ADD_CLIENT_PENDING, ADD_CLIENT_REJECTED, GET_CLIENTS_FULFILLED, GET_CLIENTS_PENDING, GET_CLIENTS_REJECTED, GET_CLIENT_FULFILLED, GET_CLIENT_PENDING, GET_CLIENT_REJECTED, REMOVE_CLIENT_FULFILLED, REMOVE_CLIENT_PENDING, REMOVE_CLIENT_REJECTED, UPDATE_CLIENT_FULFILLED, UPDATE_CLIENT_PENDING, UPDATE_CLIENT_REJECTED } from "../types";

export const clientAction = {
  loadClients({ commit }, data) {
    commit(GET_CLIENTS_PENDING)
    request({
      method: 'get',
      url: 'private/admin/searchPassagers',
      params: data
    })
    .then((response) => commit(GET_CLIENTS_FULFILLED, { data: response.data, size: data.length }))
    .catch((error) => commit(GET_CLIENTS_REJECTED, error))
  },
  getClient({ commit }, data) {
    console.log(data);
    commit(GET_CLIENT_PENDING)
    request({
      method: 'get',
      url: 'private/admin/getPassager',
      params: { data },
    })
    .then((response) => commit(GET_CLIENT_FULFILLED, { data: response.data.success }))
    .catch((error) => commit(GET_CLIENT_REJECTED, error))
  },
  addClient({ commit }, data) {
    commit(ADD_CLIENT_PENDING)
    request({
      method: 'post',
      url: 'private/admin/createPassager',
      data,
    })
    .then((response) => commit(ADD_CLIENT_FULFILLED, { data: response.data.success }))
    .catch((error) => commit(ADD_CLIENT_REJECTED, error))
  },
  removeClient({ commit }, data) {
    commit(REMOVE_CLIENT_PENDING)
    request({
      method: 'post',
      url: 'private/admin/removePassager',
      data,
    })
    .then((response) => commit(REMOVE_CLIENT_FULFILLED, { data: response.data.success }))
    .catch((error) => commit(REMOVE_CLIENT_REJECTED, error))
  },
  updateClient({ commit }, data) {
    commit(UPDATE_CLIENT_PENDING)
    request({
      method: 'post',
      url: 'private/admin/updatePassager',
      data,
    })
    .then((response) => commit(UPDATE_CLIENT_FULFILLED, { data: response.data.success }))
    .catch((error) => commit(UPDATE_CLIENT_REJECTED, error))
  }
}




