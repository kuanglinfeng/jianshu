import axios from 'axios'
import { CHANGE_DETAIL } from './detailActionTypes'


function changeDetail(title, content) {
  return {
    type: CHANGE_DETAIL,
    title,
    content
  }
}

export const getDetail = (id) => {
  return function (dispatch) {
    axios.get('/api/detail.json?id=' + id).then(response => {
      const res = response.data.data
      dispatch(changeDetail(res.title, res.content))
    })
  }
}