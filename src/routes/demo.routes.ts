//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
import {Router} from "express"; 

//Router nos permite gestionar rutas de la API
const router = Router();

//Controlador de demo que contiene lo que se ejecutara
//cuando hagamos la peticion
import { demo } from "../controllers/demo.controller";

//Peticiones HTTP
router.get('/' /*RUTA*/, demo /*CONTROLADOR*/);

//Exportamos router para usar rutas en app.ts
export default router;