const mongoose = require('mongoose');
const config = require('./../../Config/config')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.mongodbUri);

  console.log('Connecting');
}

const kittySchema = new mongoose.Schema({
    name: String,
    test:String
  });



 const savedata = async () =>{
    const Kitten = mongoose.model('Kitten3', kittySchema);
    // const fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.save();


    const kittens = await  Kitten.find();
    console.log(kittens);
}

savedata();