import React from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style/style'


class Recommend extends React.PureComponent {


  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map(item => <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />)
        }
      </RecommendWrapper>
    )
  }

}

function mapStateToProps(state) {
  return {
    list: state.getIn(['homeStore', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)
