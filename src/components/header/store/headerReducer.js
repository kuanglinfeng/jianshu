import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from './headerActionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS: {
      // immutable的set对象会结合之前immutable对象的值和设置的值 返回一个全新的对象
      return state.set('focused', true)
    }
    case SEARCH_BLUR: {
      return state.set('focused', false)
    }
    case CHANGE_LIST: {
      return state.set('list', action.payload.data)
    }
    default:
      return state
  }
}