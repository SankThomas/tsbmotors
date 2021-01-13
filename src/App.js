import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Collection from './components/Collection'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Showcase />
        <Grid />
      </Route>
      <Route path="/collection">
        <Collection />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
