"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Configuraciones para conexion con BBDD
exports.default = {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/demo',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
};
