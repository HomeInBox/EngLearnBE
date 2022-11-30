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
            res.success(result,'',200);
        } catch (error) {
            res.error(req.body,`FindAllUser: ${error}`);
        }
    },
    async FindOneUser(req,res){
        try {
           const result = await BusinessLogic.FindByidUser(req.body);
            res.success(result,'',200);
        } catch (error) {
            res.error(req.body,`FindByIdUser: ${error}`);
        }
    },
    async UserCreate(req,res){
        try {
            await BusinessLogic.CreateUser();
            res.success('','Create Success',200);
        } catch (error) {
            res.error(req.body,`UserCreate: ${error}`);
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