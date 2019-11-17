import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style/style'
import { searchFocusAction, searchBlurAction, getList, mouseEnter, mouseLeave, changePage } from './store/headerActionCreators'
import { Link } from 'react-router-dom'
import { logout } from '../../pages/login/store/loginActionCreators'


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
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
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
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
         <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
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
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
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
    mouseIn: state.getIn(['headerStore', 'mouseIn']),
    login: state.getIn(['loginStore', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(getList())
      }
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
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      // console.log(spin.style.transform)
      if (page < totalPage) {
        dispatch(changePage(page + 1))
      } else {
        dispatch(changePage(1))
      }
    },
    logout() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)