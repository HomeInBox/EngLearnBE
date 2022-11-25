const router = require('express').Router()
const controllers = require('../../Controller/home.Controller');
const Authen = require('../../Utilities/Authen/auth')



router.get('/', controllers.OnGetScoreTest)
router.post('/getscore',Authen.verifyAccess,controllers.OnGetScoreTest)

module.exports = router;