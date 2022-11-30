const router = require('express').Router()

router.use('/home',require('./home.router'))
router.use('/login',require('./login.router'))

module.exports = router 