import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './headerActionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

function changeList(data) {
  const action = {
    type: CHANGE_LIST,
    payload: {
      data: fromJS(data),
      totalPage: Math.ceil(data.length / 10)
    }
  }
  return action
}

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

export function mouseEnter() {
  const action = {
    type: MOUSE_ENTER
  }
  return action
}

export function mouseLeave() {
  const action = {
    type: MOUSE_LEAVE
  }
  return action
}

export function changePage(targetPage) {
  const action = {
    type: CHANGE_PAGE,
    payload: {
      targetPage: fromJS(targetPage)
    }
  }
  return action
}

export function getList() {
  return function (dispatch) {
    axios.get('/api/headerList.json').then(res => {
      const { success, data } = res.data
      if (success) {
        dispatch(changeList(data))
      }
    }).catch(() => console.log('error'))
  }
}