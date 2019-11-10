import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style/style'

class List extends React.Component {


  render() {

    const { list } = this.props
    return (
      <div>
        {
          list.map(item => (
            <ListItem key={item.get('id')}>
              <img className='pic' src={item.get('imgUrl')} alt=""/>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
      </div>

    )
  }

}

function mapStateToProps(state) {
  return {
    list: state.getIn(['homeStore', 'articleList'])
  }
}

export default connect(mapStateToProps, null)(List)
