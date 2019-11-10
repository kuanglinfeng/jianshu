import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style/style'


class Topic extends React.Component {


  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
           list.map(item => (
            <TopicItem key={item.get('id')}>
              <img className='topic-pic' src={item.get('imgUrl')} alt=""/>
              { item.get('title') }
            </TopicItem>
            )
          )
        }
      </TopicWrapper>
    )
  }

}


function mapStateToProps(state) {
  return {
    list: state.getIn(['homeStore', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic)
