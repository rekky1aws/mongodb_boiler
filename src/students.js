import mongoose from 'mongoose';

// Schema used to format data to send to DB
// No more data can be added but, if not specified, listed data can be ommitted
const studentSchema = new mongoose.Schema({ 
	firstName: String,
	lastName: String,
	cursus: String,
	classes: [{ body: String, date: Date }],
	enrolled: { type: Date, default: Date.now } 
});

// Exporting student model
export const Student = mongoose.model('Student', studentSchema);