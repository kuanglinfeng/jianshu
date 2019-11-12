import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA } from './homeActionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
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
    default:
      return state
  }
}