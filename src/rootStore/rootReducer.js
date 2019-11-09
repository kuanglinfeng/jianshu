import { combineReducers } from 'redux-immutable'
import headerStore from  '../components/header/store/'
import homeStore from '../pages/home/store/'


export default combineReducers({ headerStore, homeStore })


