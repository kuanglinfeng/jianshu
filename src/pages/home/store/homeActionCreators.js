import axios from 'axios'
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_SCROLL_SHOW } from './homeActionTypes'
import { fromJS } from 'immutable'


const changeHomeData = function (result) {
  return {
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}

const addHomeList = function (list, nextPage) {
  return {
    type: ADD_ARTICLE_LIST,
    articleList: fromJS(list),
    nextPage
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

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => {
  return {
    type: TOGGLE_SCROLL_SHOW,
    show
  }
}
