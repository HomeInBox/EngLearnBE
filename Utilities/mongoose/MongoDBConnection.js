const mongoose = require('mongoose');
const config = require('./../../Config/config')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.mongodbUri);
  console.log('Connecting');
}

module.exports = main();
