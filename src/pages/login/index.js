import React, { Component } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style/index'
import { connect } from 'react-redux'
import { login } from './store/loginActionCreators'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return <Redirect to='/' />
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' type='text' ref={(value) => { this.account = value }} />
            <Input placeholder='密码' type='password' ref={(value) => { this.password = value }} />
            <Button onClick={() => {
              this.props.login(this.account, this.password)
            }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapStateToProps = state => ({
  loginStatus: state.getIn(['loginStore', 'login'])
})

const mapDispatchToProps = dispatch => ({
  login(account, password) {
    dispatch(login(account, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
