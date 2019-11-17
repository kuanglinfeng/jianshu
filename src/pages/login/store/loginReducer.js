import { fromJS } from 'immutable'
import { CHANGE_LOGIN, LOGOUT_OUT } from './loginActionTypes'

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN: {
      return state.set('login', action.value)
    }
    case LOGOUT_OUT: {
      return state.set('login', state.value)
    }
    default:
      return state
  }
}