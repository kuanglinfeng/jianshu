import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './headerActionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
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
      const { data, totalPage } = action.payload
      return state.merge({
        list: data,
        totalPage: totalPage
      })
    }
    case MOUSE_ENTER: {
      return state.set('mouseIn', true)
    }
    case MOUSE_LEAVE: {
      return state.set('mouseIn', false)
    }
    case CHANGE_PAGE: {
      return state.set('page', action.payload.targetPage)
    }
    default:
      return state
  }
}