const mongoose = require('mongoose');
const config = require('./../../Config/config')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.mongodbUri);

  console.log('Connecting');
}

const kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
};

 const savedata = async () =>{
    const Kitten = mongoose.model('Kitten', kittySchema);

    const fluffy = new Kitten({ name: 'fluffy' });
    fluffy.save();
    fluffy.speak();
    const kittens = await  Kitten.find();
    console.log(kittens);
}

savedata();