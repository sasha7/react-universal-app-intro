const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')
const SET_SEARCH_TERM = 'setSearchTerm'

// Our initial state for the app
const initialState = {
  searchTerm: '',
  shows: shows
}

// Our root reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

// searchTerm reducer
const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState,
  redux.compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : (f) => f))

// Connectors Map Redux state to React props
const mapStateToProps = (state) => ({searchTerm: state.searchTerm, shows: state.shows})

// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (term) {
      dispatch({type: SET_SEARCH_TERM, value: term})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {
  connector,
  store,
  rootReducer
}
