
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please specify the name of the fruit!"]
  },
  rating : {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name : "Peach",
  rating: 7
});

//fruit.save();

const newPersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitSchema
});

const Person = mongoose.model("Person", newPersonSchema);

const anar = new Fruit ({
  name : "Anar",
  rating: 10,
  review: "Great fruit really"
});

//anar.save();

// const person = new Person({
//   name: "Ammy",
//   age: 23,
//   favFruit:
// });
//
// person.save();


//
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The Awesome fruit"
// });
// const orange = new Fruit({
//   name: "Orange",
//   rating: 9,
//   review: "Best fruit"
// });
// const banana = new Fruit({
//   name: "Banana",
//   rating: 10,
//   review: "Greatest fruit!"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succefully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   } else {
//
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne({_id: "5eff2ea9eb735d071c0326e0"}, {review: "Nice sweet fruit"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated");
//   }
// });

Fruit.deleteOne({_id: "5eff3b5e94e2010bf4d89755"}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Succefullydeleted");
  }
});


//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };


// Person.deleteOne({name: "John"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succefully deleted");
//   }
// });


// Person.updateOne({name: "John"}, {favFruit: anar}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated");
//   }
// });
