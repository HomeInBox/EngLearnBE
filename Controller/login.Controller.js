const BusinessLogic = require('../BusinessLogic/login.businesslogic');
const extention = require('../Utilities/Extention')

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
            await BusinessLogic.CreateUser(req.body);
            res.success('','Create Success',200);
        } catch (error) {
            res.error(req.body,`UserCreate: ${error}`);
        }
    },
    async UserUpdate(req,res){
        try {
            await BusinessLogic.UserUpdate(req.body);
            res.success('','Update Success',200);
        } catch (error) {
            res.error(req.body,`UserUpdate: ${error}`);
        }
    },
    async UserRemove(req,res){
        try {
            await BusinessLogic.UserRemove(req.body);
            res.success('','Remove Success',200);
        } catch (error) {
            res.error(req.body,`UserRemove: ${error}`);
        }
    },
    async testencrypt(req,res){
        try {
            let key = await extention.Encrypt('tanadej');
            let decrypt = await extention.decrypt(key)
            console.log(decrypt);
            res.success(key,'test',200);
        } catch (error) {
            res.error(req.body,`testencrypt: ${error}`);
        }
    }
}

module.exports = {...methodLogin,...methodUserManage}