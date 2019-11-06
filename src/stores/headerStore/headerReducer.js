import { SEARCH_FOCUS, SEARCH_BLUR } from '../../actionTypes/headerActionType'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS: {
      return { focused: true }
    }
    case SEARCH_BLUR: {
      return { focused: false }
    }
    default:
      return state
  }
}