const BusinessLogic = require('../BusinessLogic/login.businesslogic');

const methodLogin = {
    async login(req,res){
        try {
            
        } catch (error) {
            
        }
    }
}

const methodUserManage = {
    async FindAllUser(req,res){
        try {
           const result = await BusinessLogic.FindAllUser();
            res.success(result,200);
        } catch (error) {
            res.error(error);
        }
    },
    async UserCreate(req,res){
        try {
            console.log("createUser")
            await BusinessLogic.createUser();
            res.success('createUser',200);
        } catch (error) {
            res.error();
        }
    },
    async UserUpdate(req,res){
        try {
            
        } catch (error) {
            
        }
    },
    async UserRemove(req,res){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = {...methodLogin,...methodUserManage}