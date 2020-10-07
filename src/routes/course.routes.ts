import {Router} from "express"; 
import courseController from '../controllers/course.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

//Peticiones HTTP (ruta, función del controlador)
router.get('/course/', courseController.getCourses);
router.post('/course/add/', courseController.postCourse);

//Exportamos router para usar rutas en app.ts
export default router;