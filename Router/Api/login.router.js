const router = require('express').Router();
const authen = require('../../Utilities/Authen/auth') 
const controller = require('../../Controller/login.Controller')

router.post('/',authen.AuthenGuard,controller.login)
router.get('/getalluser',controller.FindAllUser)
router.post('/createuser',controller.UserCreate)

module.exports = router;