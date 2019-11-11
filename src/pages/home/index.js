import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style/style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios'
import { connect } from 'react-redux'


class Home extends React.Component {

  componentDidMount() {
    axios.get('/api/home.json').then(res => {
      const data = res.data
      const action = {
        type: 'CHANGE_HOME_DATA',
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList
      }

      this.props.changeHomeData(action)
    })
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573234051624&di=6d185d03aa10af4e4dd64dab5d8f9be8&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8adba93ca51c105a95116f103096dee925f1078617c36-jj0a2q_fw658" alt=""
            className='banner-img'
          />
          <Topic />
          <List />

        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    changeHomeData(action) {
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
