const jwt = require('jsonwebtoken')
const config = require('../../Config/config')

const genareteToken = () =>{
        return jwt.sign({username: "tanadej",age :26}, config.secret, { expiresIn: '1800s' });
}

const method = {

  async verifyAccess(req ,res ,next) {
    try{
      const token = req.headers['authorization']
    if (token == null) return res.error("not found token",error,"OnGetScore");
  
    jwt.verify(token, config.secret,(err,user) =>{
      if (err){
        console.log("not verify")
        res.error("OnGetScore",error,"OnGetScore");
       
      }else {
        console.log(user);
        next();
      }
    });

    }catch(error){
      res.error("",error,"UnAuthorized",401);
    }
  }
}



module.exports = {...method};
