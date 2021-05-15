const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

const MONGODB_URI = "mongodb+srv://public-user:admin2021@cluster0.jcdmn.mongodb.net/lab-mongoose-movies-2?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("🔌 Connected to Mongo!");
  })
  .catch((err) => console.error("Error connecting to mongo", err));

//
// Celebrities
//

var datas = [
  {
    name: "Kim Kardashian",
    occupation: "Unknown",
    catchPhrase: "I'm a vegan",
  },
  {
    name: "Melz",
    occupation: "unemployed",
    catchPhrase: "Is this a thing?",
  },
  {
    name: "Patrick Star",
    occupation: "Krusty Krab",
    catchPhrase: "Noooo, this is PATRICK",
  },
];
const p1 = Celebrity.create(datas);
p1.then((celebrities) =>
  console.log(`${celebrities.length} celebrities created!`)
);
