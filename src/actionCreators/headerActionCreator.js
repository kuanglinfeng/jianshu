import { SEARCH_FOCUS, SEARCH_BLUR } from '../actionTypes/headerActionType'


export function searchFocusAction() {
  const action = {
    type: SEARCH_FOCUS
  }
  return action
}


export function searchBlurAction() {
  const action = {
    type: SEARCH_BLUR
  }
  return action
}