import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyled } from './globalStyle'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './components/header'
import rootStore from './rootStore'



const App = () => (
	<div>
		<GlobalStyled />
		<GlobalIconfont />
		<Provider store={rootStore}>
			<Header />
		</Provider>
	</div>
)


export default App