import { request } from "../../services/Request.js"
import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from "../types.js";

export const action = {
  loginAction({ commit }, data) {
    console.log('sdfsdf');
    commit(LOGIN_PENDING)
    console.log('fsdfsd');
    request({
      method: 'post',
      url: '/public/shared/login',
      data,
    })
    .then((response) => commit(LOGIN_FULFILLED, { data: response.data.success }))
    .catch((error) => commit(LOGIN_REJECTED, error))
  }
}