const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

mongoose.connect('mongodb://localhost/lab-mongoose-movies2', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => {
    console.log('🔌 Connected to Mongo!');
  })
  .catch(err => console.error('Error connecting to mongo', err))
;

//
// Celebrities
//

var datas = [
  {
      name: 'Kim Kardashian',
      occupation: 'Unknown',
      catchPhrase: "I'm a vegan",
  },
  {
      name: 'Melz',
      occupation: 'unemployed',
      catchPhrase: "Is this a thing?",
  },
  {
      name: 'Patrick Star',
      occupation: 'Krusty Krab',
      catchPhrase: "Noooo, this is PATRICK",
  }
];
const p1 = Celebrity.create(datas);
p1.then(celebrities => console.log(`${celebrities.length} celebrities created!`))