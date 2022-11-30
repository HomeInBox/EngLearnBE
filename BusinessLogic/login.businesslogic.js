const LoginModel = require('../Model/login.model');


const method = {
  async   createUser(req){
        try {
            console.log("createUserService")
            const chang = new LoginModel({USERNAME:'username',PASSWORD:'password'});
            await chang.save();
        } catch (error) {
            console.log(error)
        }
    },
    async FindAllUser(req){
        try {
            return LoginModel.find();
        } catch (error) {
            return error;
        }
        
    }
}

module.exports = {...method}