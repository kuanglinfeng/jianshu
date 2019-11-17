import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyled } from './globalStyle'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './components/header'
import rootStore from './rootStore'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login'



const App = () => (
	<div>
		<GlobalStyled />
		<GlobalIconfont />
		<Provider store={rootStore}>
			<BrowserRouter>
				<Header />
				<Route path='/' exact component={Home}></Route>
				<Route path='/login' exact component={Login}></Route>
				<Route path='/detail' exact component={Detail}></Route>
			</BrowserRouter>
		</Provider>
	</div>
)


export default App