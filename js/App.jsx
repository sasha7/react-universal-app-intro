// Pull React from npm node_modules
import React from 'react'
// Use destructuring Or pull all deps in each line const Router =
// ReactRouter.Router const Routes = ReactRouter.Route const hashHistory =
// ReactRouter.hashHistory Eventually when we switch to node, we'll use browser
// history
const { browserHistory, Router } = require('react-router')

const Layout = require('./Layout')

const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux

// Shim for node
if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')// shim for node.js
  }
}

// Migrated JSX-ish config to react-route the object config style
// to enable async route loading
const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        // if (error) {
        //   return console.error('ClientApp Landing require.ensure error', error)
        // }
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          // if (error) {
          //   return console.error('ClientApp Search require.ensure error', error)
          // }
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          // if (error) {
          //   return console.error('ClientApp Details require.ensure error', error)
          // }
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

// const myRoutes = () => (
//   <Route path='/' component={Layout}>
//     <IndexRoute component={Landing} />
//     <Route path='/search' component={Search} />
//     <Route path='/details/:id' component={Details} />
//   </Route>
// )

class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
}

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
