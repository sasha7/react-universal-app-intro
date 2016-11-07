webpackJsonp([1],{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(161),
	    Link = _require.Link;

	var _require2 = __webpack_require__(225),
	    connector = _require2.connector;

	var _require3 = __webpack_require__(161),
	    browserHistory = _require3.browserHistory;

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing(props) {
	    _classCallCheck(this, Landing);

	    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

	    _this.handleSearchTermEvent = _this.handleSearchTermEvent.bind(_this);
	    _this.gotoSearch = _this.gotoSearch.bind(_this);
	    return _this;
	  }

	  _createClass(Landing, [{
	    key: 'handleSearchTermEvent',
	    value: function handleSearchTermEvent(e) {
	      this.props.setSearchTerm(e.target.value);
	    }
	  }, {
	    key: 'gotoSearch',
	    value: function gotoSearch(e) {
	      // Redirect me to the search page when enter key inside input is pressed (form is submitted)
	      browserHistory.push('search');
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'home-info' },
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          'Videos App'
	        ),
	        React.createElement(
	          'form',
	          { onSubmit: this.gotoSearch },
	          React.createElement('input', {
	            value: this.props.searchTerm,
	            onChange: this.handleSearchTermEvent,
	            className: 'search', type: 'text',
	            placeholder: 'Search'
	          })
	        ),
	        React.createElement(
	          Link,
	          { to: '/search', className: 'browse-all' },
	          'or Browse All'
	        )
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	var _React$PropTypes = React.PropTypes,
	    func = _React$PropTypes.func,
	    string = _React$PropTypes.string;


	Landing.propTypes = {
	  searchTerm: string,
	  setSearchTerm: func
	};

	module.exports = connector(Landing);

/***/ }

});