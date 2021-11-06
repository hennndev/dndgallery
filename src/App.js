import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery/Gallery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
	return (
    	<Router>
			<Header/>
			<Gallery/>
    	</Router>
  	)
}

export default App
