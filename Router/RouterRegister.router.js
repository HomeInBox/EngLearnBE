const router = require('express').Router()

router.use('/api', require('./Api/index.router'))

module.exports = router