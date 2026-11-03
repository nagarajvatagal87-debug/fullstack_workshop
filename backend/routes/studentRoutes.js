import { Router } from 'express';
import { getStudents, createStudent, deleteStudent } from '../controllers/studentController.js';

const router = Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);

export default router;
