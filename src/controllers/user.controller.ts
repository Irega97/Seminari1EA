import { Request, Response } from "express";
import User from "../models/user"

//Hacemos una busqueda en la BBDD de todo lo que hay en demo
//Es una busqueda asincrona, por eso usamos el await
/* export const getUsers = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    const results = await User.find({});
    return res.status(400).json(results);
} */

function getUsers(req:Request, res:Response): void {
    User.find({}).populate('courses').then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

function getUser(req:Request, res:Response): void {
    User.find({"nombre":req.params.nombre}).populate('courses').then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function postUserDemo (req: Request, res: Response): void {
    const user = new User({
        "nombre": req.body.nombre,
        "apellidos": req.body.apellidos,
        "edad": req.body.edad,
        "correo": req.body.correo,
        "telefono": req.body.telefono,
        "grado": req.body.grado,
        "courses": req.body.courses
    });
    console.log("El nombre es",req.body.nombre);
    console.log(req.body);
    user.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

export default { getUsers, getUser, postUserDemo };