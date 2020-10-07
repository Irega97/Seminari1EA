"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
//var Demo = mongoose.model('Demo', demoSchema); ????????
//Hacemos una busqueda en la BBDD de todo lo que hay en demo
//Es una busqueda asincrona, por eso usamos el await
/* export const getUsers = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    const results = await User.find({});
    return res.status(400).json(results);
} */
function getUsers(req, res) {
    user_1.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getUser(req, res) {
    user_1.default.find({ "nombre": req.params.nombre }).populate('courses').then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function postUserDemo(req, res) {
    /* let courses = [];
    courses.push(req.body.courses); */
    const user = new user_1.default({
        "nombre": req.body.nombre,
        "apellidos": req.body.apellidos,
        "edad": req.body.edad,
        "correo": req.body.correo,
        "telefono": req.body.telefono,
        "grado": req.body.grado,
        "courses": req.body.courses
    });
    console.log("El nombre es", req.body.nombre);
    console.log(req.body);
    user.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getUsers, getUser, postUserDemo };
