import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style/style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { getHomeInfo, toggleTopShow } from './store/homeActionCreators'


class Home extends React.PureComponent {

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
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
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }

      </HomeWrapper>
    )
  }

}

function mapStateToProps(state) {
  return {
    showScroll: state.getIn(['homeStore', 'showScroll'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeHomeData() {
      dispatch(getHomeInfo())
    },
    changeScrollTopShow(e) {
      const top = document.documentElement.scrollTop
      if (top > 100) {
        dispatch(toggleTopShow(true))
      } else {
        dispatch(toggleTopShow(false))
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
