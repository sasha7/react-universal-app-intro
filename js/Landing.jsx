const React = require('react')
const {Link} = require('react-router')
const { connector } = require('./Store')
const { browserHistory } = require('react-router')

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  }
  gotoSearch (e) {
    // Redirect me to the search page when enter key inside input is pressed (form is submitted)
    browserHistory.push('search')
    e.preventDefault()
  }
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>Videos App</h1>
        <form onSubmit={this.gotoSearch}>
          <input
            value={this.props.searchTerm}
            onChange={this.handleSearchTermEvent}
            className='search' type='text'
            placeholder='Search'
          />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
