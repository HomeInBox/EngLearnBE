const router = require('express').Router()
const controllers = require('../../Controller/home.Controller');
const Authen = require('../../Utilities/Authen/auth')



router.get('/',Authen.AuthenGuard, controllers.OnGetScoreTest)
router.post('/getscore',controllers.OngetScore)

module.exports = router;