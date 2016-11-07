const React = require('react')
const Header = require('./Header')
const { connector } = require('./Store')
const axios = require('axios')

class Details extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      omdbData: {}
    }
  }

  // Runs right after component gets put into the DOM (only in browser, not in node)
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
      .then((res) => {
        this.setState({omdbData: res.data})
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  }

  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }

  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    let rating
    console.log('state', this.state.omdbData)
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div style={{ textAlign: 'left' }} className='container'>
        <Header showSearch={false} />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>{year}</h2>
          {rating}
          <img className='video-poster' src={`/public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;contorls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>

      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

Details.propTypes = {
  shows: arrayOf(object).isRequired,
  params: object
}

module.exports = connector(Details)
