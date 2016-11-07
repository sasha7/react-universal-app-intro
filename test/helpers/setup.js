require('babel-register')
require('babel-polyfill')

// Fake DOM for React to interact with
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
