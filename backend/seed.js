import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Event from './models/Event.js';
import Student from './models/Student.js';
import Registration from './models/Registration.js';

await connectDB();

// Clear existing sample registrations and students
await Promise.all([Registration.deleteMany({}), Student.deleteMany({})]);

// Clear and seed sample events
await Event.deleteMany({});
await Event.insertMany([
  {
    title: 'Full Stack Development Workshop',
    description: 'A hands-on introduction to building and integrating a full-stack application.',
    date: new Date(Date.now() + 7 * 86400000),
    venue: 'MCA Seminar Hall',
    capacity: 60,
    category: 'Workshop',
    status: 'Upcoming'
  },
  {
    title: 'AI & Innovation Seminar',
    description: 'Explore practical applications and emerging directions in artificial intelligence.',
    date: new Date(Date.now() + 14 * 86400000),
    venue: 'Auditorium',
    capacity: 100,
    category: 'Seminar',
    status: 'Upcoming'
  },
  {
    title: 'Web Development Hackathon',
    description: 'Work in teams to design and build a working web application.',
    date: new Date(Date.now() + 21 * 86400000),
    venue: 'Innovation Lab',
    capacity: 40,
    category: 'Technical',
    status: 'Upcoming'
  }
]);

console.log('Seed complete: Sample events created. Dummy students and registrations removed.');
await mongoose.connection.close();
