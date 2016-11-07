/* eslint-env mocha */

// Using Mocha for testing
// Chai is assertion library
const { expect } = require('chai')
const React = require('React')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shows } = require('../public/data')
const { store, rootReducer } = require('../js/Store')

// Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate,
// and traverse your React Components' output.
// http://airbnb.io/enzyme/index.html
const { shallow, mount } = require('enzyme')

xdescribe('Search component', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    // console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>Videos App</h1>)).to.equal(true)
  })

  it('should render ShowCard components', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />) // using mount because we want to be able to simulate events
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

// Testing Redux store
describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})
    expect(state).to.deep.equal({shows: shows, searchTerm: ''})
  })
  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({searchTerm: 'some random string'}, {type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({searchTerm: 'correct string'})
  })
})
