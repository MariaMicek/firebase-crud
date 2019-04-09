import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import List from './components/List'
import Menu from './components/Menu'
import Create from './components/Create'
import Read from './components/Read'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path={'/'} component={List} />
        <Route path={'/create'} component={Create} />
        <Route path={'/read/:id'} component={Read} />
      </BrowserRouter>
    )
  }
}

export default App;
