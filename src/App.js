import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery/Gallery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

	console.log(process.env.REACT_APP_API_KEY)

	return (
    	<Router>
			<Header/>
			<Gallery/>
    	</Router>
  	)
}

export default App
