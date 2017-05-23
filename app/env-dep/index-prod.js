'use strict'

require('babel-register')

const Main = require("./main.js").default

process.env.NODE_ENV = 'production'

new Main()
