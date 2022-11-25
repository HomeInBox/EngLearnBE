const express = require('express')

module.exports = async (app) => {
    app.use(express.json());
    app.use(require('./reponse'))
}