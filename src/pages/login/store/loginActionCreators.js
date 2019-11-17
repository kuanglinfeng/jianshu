import axios from 'axios'
import { CHANGE_LOGIN, LOGOUT_OUT } from './loginActionTypes'

const changeLogin = () => {
  return {type: CHANGE_LOGIN, value: true}
}

export function logout() {
  return {type: LOGOUT_OUT, value: false}
}

export function login(account, password) {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败')
      }
    })
  }
}