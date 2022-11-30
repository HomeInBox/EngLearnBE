const mongoose = require('mongoose');

const USERLOGIN = new mongoose.Schema ({
    USERNAME:String,
    PASSWORD:String
});

const UserModel = mongoose.model('Kitten2', USERLOGIN);
module.exports =  UserModel;