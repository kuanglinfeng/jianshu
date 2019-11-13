import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style/style'
import { getMoreList } from '../store/homeActionCreators'
import { Link } from 'react-router-dom'

class List extends React.PureComponent {


  render() {

    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to='/detail'>
            <ListItem>
              <img className='pic' src={item.get('imgUrl')} alt=""/>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>

    )
  }

}

function mapStateToProps(state) {
  return {
    list: state.getIn(['homeStore', 'articleList']),
    page: state.getIn(['homeStore', 'articlePage'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMoreList(page) {
      dispatch(getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
