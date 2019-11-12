import axios from 'axios'
import { CHANGE_HOME_DATA } from './homeActionTypes'


const changeHomeData = function (result) {
  return {
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}

export const getHomeInfo = () => {
  return function (dispatch) {
    axios.get('/api/home.json').then(res => {
      const data = res.data
      const action = changeHomeData(data)
      dispatch(action)
    })
  }
}
