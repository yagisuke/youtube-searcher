import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import importedComponent from 'react-imported-component'
import Home from './Pages/Home'
import Loading from './Loading'

const AsyncNoMatch = importedComponent(
  () => import('./Pages/NoMatch'),
  {
    LoadingComponent: Loading
  }
)

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
