import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Menu from './components/views/Menu'
import Contact from './components/views/Contact'
import About from './components/views/About'
import Order from './components/views/Order'
import Footer from './components/Footer'

export default function App() {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path='/menu' exact>
              <Menu />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/order' exact>
              <Order />
            </Route>
            <Redirect to='/' />
          </Switch>
        </main>
          <Footer />
      </Router>
    </React.Fragment>
  )
}
