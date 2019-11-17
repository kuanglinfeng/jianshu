import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyled } from './globalStyle'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './components/header'
import rootStore from './rootStore'
import Home from './pages/home/'
import Detail from './pages/detail/'
import Login from './pages/login/'
import Write from './pages/write/'



const App = () => (
	<div>
		<GlobalStyled />
		<GlobalIconfont />
		<Provider store={rootStore}>
			<BrowserRouter>
				<Header />
				<Route path='/' exact component={Home}></Route>
				<Route path='/login' exact component={Login}></Route>
				<Route path='/write' exact component={Write}></Route>
				<Route path='/detail' exact component={Detail}></Route>
			</BrowserRouter>
		</Provider>
	</div>
)


export default App