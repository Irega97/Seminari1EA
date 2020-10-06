"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Interfaces
const mongoose_1 = require("mongoose");
//Modelo de objeto que se guarda en la BBDD de MongoDB
const userSchema = new mongoose_1.Schema({
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    edad: {
        type: Number
    },
    correo: {
        type: String
    },
    telefono: {
        type: Number
    },
    grado: {
        type: String
    }
});
//Exportamos modelo para poder usarlo
exports.default = mongoose_1.model('User', userSchema);
