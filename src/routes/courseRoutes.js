import express from 'express';
import { getCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { courseSchema } from '../utils/schema.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const courseRoutes = express.Router()

courseRoutes.get('/get-course', verifyToken, getCourse)
courseRoutes.post('/create-course', validateRequest(courseSchema), createCourse)
courseRoutes.put('/update-course/:id', validateRequest(courseSchema), updateCourse)
courseRoutes.delete('/delete-course/:id', deleteCourse)

export default courseRoutes