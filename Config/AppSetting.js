const express = require('express')

module.exports = async (app) => {
    require('../Utilities/mongoose/MongoDBConnection')
    app.use(express.json());
    app.use(require('./response'))
}