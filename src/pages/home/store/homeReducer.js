import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_SCROLL_SHOW } from './homeActionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA: {
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    }
    case ADD_ARTICLE_LIST: {
      return state.merge({
        'articleList': state.get('articleList').concat(action.articleList),
        'articlePage': action.nextPage
      })
    }
    case TOGGLE_SCROLL_SHOW: {
      return state.set('showScroll', action.show)
    }
    default:
      return state
  }
}