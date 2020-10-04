//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
import {Router} from "express"; 
import userController from '../controllers/user.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

//Controlador de demo que contiene lo que se ejecutara
//cuando hagamos la peticion
/* import { getUsers } from "../controllers/user.controller"; */

//Peticiones HTTP
router.get('/' /*RUTA*/, userController.getUsers /*FUNCION DEL CONTROLADOR*/);
router.post('/register', userController.postUserDemo);

//Exportamos router para usar rutas en app.ts
export default router;