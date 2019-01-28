import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import Posting from './Posting'
import Listing from './Listing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/Posting" component={Posting} />
            <Route path="/:slug/:id" component={Listing} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
