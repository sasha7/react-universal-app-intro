const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./Store')

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            Videos App
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }

}

const { func, bool, string } = React.PropTypes

Header.propTypes = {
  setSearchTerm: func,
  showSearch: bool,
  searchTerm: string
}

module.exports = connector(Header)
