"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
const express_1 = require("express");
//Router nos permite gestionar rutas de la API
const router = express_1.Router();
//Controlador de demo que contiene lo que se ejecutara
//cuando hagamos la peticion
const demo_controller_1 = require("../controllers/demo.controller");
//Peticiones HTTP
router.get('/' /*RUTA*/, demo_controller_1.demo /*CONTROLADOR*/);
//Exportamos router para usar rutas en app.ts
exports.default = router;
