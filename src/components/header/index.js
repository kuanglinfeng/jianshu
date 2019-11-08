import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style/style'
import { searchFocusAction, searchBlurAction, getList, mouseEnter, mouseLeave, changePage } from './store/headerActionCreators'



class Header extends React.Component {

  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = [] 
    for (let i = (page - 1) * 10; newList[i] && i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={focused ? 'focused iconfont' : 'iconfont'}
            >
              &#xe6e4;
        </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
        </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['headerStore', 'focused']), // 将仓库里的focused映射到focused
    list: state.getIn(['headerStore', 'list']),
    page: state.getIn(['headerStore', 'page']),
    totalPage: state.getIn(['headerStore', 'totalPage']),
    mouseIn: state.getIn(['headerStore', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(getList())
      dispatch(searchFocusAction())
    },
    handleInputBlur() {
      dispatch(searchBlurAction())
    },
    handleMouseEnter() {
      dispatch(mouseEnter())
    },
    handleMouseLeave() {
      dispatch(mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(changePage(page + 1))
      } else {
        dispatch(changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)