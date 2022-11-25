const mongoose = require('mongoose');
const config = require('./../../Config/config')

   main().catch(err => console.log(err));

module.exports = async  () => {
    await mongoose.connect(config.mongodbUri);
    console.log('Connecting:Success');
}