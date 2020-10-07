"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
const express_1 = require("express");
const course_controller_1 = __importDefault(require("../controllers/course.controller"));
//Router nos permite gestionar rutas de la API
const router = express_1.Router();
//Controlador de demo que contiene lo que se ejecutara
//cuando hagamos la peticion
/* import { getUsers } from "../controllers/user.controller"; */
//Peticiones HTTP
router.get('/course/' /*RUTA*/, course_controller_1.default.getCourses /*FUNCION DEL CONTROLADOR*/);
router.post('/add/', course_controller_1.default.postCourse);
//Exportamos router para usar rutas en app.ts
exports.default = router;
