import Student from '../models/Student.js';
import Registration from '../models/Registration.js';

export async function getStudents(req, res, next) {
  try {
    res.json(await Student.find().sort({ name: 1 }));
  } catch (error) {
    next(error);
  }
}

export async function createStudent(req, res, next) {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
}

export async function deleteStudent(req, res, next) {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await Registration.deleteMany({ student: student._id });
    await student.deleteOne();
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    next(error);
  }
}
