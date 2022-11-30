const router = require('express').Router();
const authen = require('../../Utilities/Authen/auth') 
const controller = require('../../Controller/login.Controller')

router.post('/',controller.login)
router.get('/getalluser',controller.FindAllUser)
router.post('/getoneuser',controller.FindOneUser)
router.post('/createuser',authen.AuthenGuard,controller.UserCreate)

module.exports = router;