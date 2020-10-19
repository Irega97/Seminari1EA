"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
//Router nos permite gestionar rutas de la API
const router = express_1.Router();
//Peticiones HTTP (ruta, función del controlador)
router.get('/user/' /*RUTA*/, user_controller_1.default.getUsers /*FUNCION DEL CONTROLADOR*/);
router.get('/user/:nombre', user_controller_1.default.getUser);
router.post('/user/register', user_controller_1.default.postUserDemo);
router.put('/user/update/:id', user_controller_1.default.updateUser);
router.delete('/user/delete/:id', user_controller_1.default.deleteUser);
//Exportamos router para usar rutas en app.ts
exports.default = router;
