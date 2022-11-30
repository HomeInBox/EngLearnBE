const jwt = require('jsonwebtoken')
const config = require('../../Config/config')

const method = {

  async AuthenGuard(req ,res ,next) {
    try{
      const token = req.headers['authorization']
    if (token == null) return res.error("not found token",error,"OnGetScore");
  
    jwt.verify(token, config.secret,(err,user) =>{
      if (err){
        res.error('',`UnAuthorized`,401);
      }else {
        next();
      }
    });
    }catch(error){
      res.error('',`UnAuthorized`,401);
    }
  },

  async genareteToken (req){
    return jwt.sign({
      USERNAME: req.USERNAME,
      PASSWORD: req.PASSWORD
    }, config.secret, { expiresIn: '1800s' });
 },
}

module.exports = {...method};
