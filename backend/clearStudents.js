import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Student from './models/Student.js';
import Registration from './models/Registration.js';

try {
  await connectDB();
  const deletedRegistrations = await Registration.deleteMany({});
  const deletedStudents = await Student.deleteMany({});
  console.log(`Successfully removed ${deletedStudents.deletedCount} students and ${deletedRegistrations.deletedCount} registrations.`);
} catch (error) {
  console.error('Error clearing students:', error.message);
} finally {
  await mongoose.connection.close();
}

