const mongoose = require('mongoose');

const USERLOGIN = new mongoose.Schema ({
    USERNAME:String,
    PASSWORD:String,
    UPDATE_DATE:String,
    CREATE_DATE:String
});

const UserModel = mongoose.model('userlogins', USERLOGIN);


module.exports =  UserModel;