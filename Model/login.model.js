const mongoose = require('mongoose');

const USERLOGIN = new mongoose.Schema ({
    USERNAME:String,
    PASSWORD:String
});

const UserModel = mongoose.model('userlogins', USERLOGIN);


module.exports =  UserModel;