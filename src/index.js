import { config } from 'dotenv';
import mongoose from 'mongoose';
import { Student } from './students.js';

config(); // .env data to process
// console.log(process.env.DB_URI);
// console.log(process.env.DB_NAME);

// URI String from .env
const uri = process.env.DB_URI + process.env.DB_NAME

// Connecting to the database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("connecté à Mongoose")});

// Data to insert
const testStudentData = { 
	firstName: "Donatien",
	lastName: "Hochart",
	cursus: "Développeur Web" 
};

// Using Model to insert
await Student.create(testStudentData);


// await executeStudentCrudOperations();
