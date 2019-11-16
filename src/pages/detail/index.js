import React from 'react'
import { DetailWrapper, Header, Content } from './style/index'
import { connect } from 'react-redux'
import { getDetail } from './store/detailActionCreators'

class Detail extends React.Component {

  componentDidMount() {
    const id = this.props.location.search.split('=')[1]
    this.props.getDetail(id)
  }

  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header> 
          {title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['detailStore', 'title']),
    content: state.getIn(['detailStore', 'content'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail(id) {
      dispatch(getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
