import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyled } from './globalStyle'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './components/header'
import rootStore from './rootStore'
import Home from './pages/home/index'
import Detail from './pages/detail/index'



const App = () => (
	<div>
		<GlobalStyled />
		<GlobalIconfont />
		<Provider store={rootStore}>
			<Header />
			<BrowserRouter>
				<Route path='/' exact component={Home}></Route>
				<Route path='/detail' exact component={Detail}></Route>
			</BrowserRouter>
		</Provider>
	</div>
)


export default App