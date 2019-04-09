import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import List from './components/List'
import Menu from './components/Menu'
import Create from './components/Create'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path={'/'} component={List} />
        <Route path={'/create'} component={Create} />
      </BrowserRouter>
    )
  }
}

export default App;
