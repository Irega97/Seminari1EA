"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = __importDefault(require("../controllers/course.controller"));
//Router nos permite gestionar rutas de la API
const router = express_1.Router();
//Peticiones HTTP (ruta, función del controlador)
router.get('/course/', course_controller_1.default.getCourses);
router.post('/course/add/', course_controller_1.default.postCourse);
//Exportamos router para usar rutas en app.ts
exports.default = router;
