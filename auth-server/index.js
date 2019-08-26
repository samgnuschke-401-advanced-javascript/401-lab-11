'use strict';

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://hanna9:estifaman9@cluster0-s90so.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true,});

// Start the web server
require('./src/app.js').start(process.env.PORT);
