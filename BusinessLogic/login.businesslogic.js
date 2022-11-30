const LoginModel = require('../Model/login.model');


const method = {
  async  CreateUser(req){
            const Userlogin = new LoginModel({USERNAME:'username',PASSWORD:'password'});
            await Userlogin.save();
    },
    async FindAllUser(req){
      return await LoginModel.find();
    },
    async FindByidUser(req){
        return await LoginModel.findOne(req);
    }
}

module.exports = {...method}