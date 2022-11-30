const LoginModel = require('../Model/login.model');
const Extention = require('../Utilities/Extention')

const method = {
  async  CreateUser(req){
            const body = req.data;
            const Userlogin = new LoginModel(
                {
                    USERNAME:body.USERNAME
                    ,PASSWORD:body.PASSWORD
                    ,CREATE_DATE:Extention.DateTimeNow()
                });
            await Userlogin.save();
    },

    async FindAllUser(){
      return await LoginModel.find();
    },

    async FindByidUser(req){
        return await LoginModel.findOne(req);
    },

    async UserUpdate(req){
        const Searchuser = await LoginModel.findById(req._id);
        const body = req.data;
        if(Searchuser){
           await LoginModel.updateOne({_id:Searchuser._id},
            {
                USERNAME:body.USERNAME
                ,PASSWORD:body.PASSWORD
                ,UPDATE_DATE:Extention.DateTimeNow(),
            }); 
        }else{
            throw "!not found Username";
        }
    },

    async UserRemove(req){
        const Searchuser = await LoginModel.findById(req._id);
        if(Searchuser){
            await LoginModel.deleteOne({_id:Searchuser._id})
        }else{
            throw "!not found Username";
        }
    }
}

module.exports = {...method}