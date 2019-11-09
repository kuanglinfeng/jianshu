import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style/style'


class Topic extends React.Component {


  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item, index) => (
            <TopicItem key={index}>
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
    list: state.get('homeStore').get('topicList')
  }
}

export default connect(mapStateToProps, null)(Topic)
