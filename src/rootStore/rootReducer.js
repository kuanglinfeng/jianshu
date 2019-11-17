import { combineReducers } from 'redux-immutable'
import headerStore from  '../components/header/store/'
import homeStore from '../pages/home/store/'
import detailStore from '../pages/detail/store/'
import loginStore from '../pages/login/store/'


export default combineReducers({ headerStore, homeStore, detailStore, loginStore })


