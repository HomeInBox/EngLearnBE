const router = require('express').Router();
const authen = require('../../Utilities/Authen/auth') 
const controller = require('../../Controller/login.Controller')

router.post('/',controller.login)
router.get('/getalluser',controller.FindAllUser)
router.post('/getoneuser',controller.FindOneUser)
router.post('/createuser',controller.UserCreate)
router.post('/updateuser',controller.UserUpdate)
router.post('/removeuser',controller.UserRemove)
router.post('/testencrypt',controller.testencrypt)

module.exports = router;