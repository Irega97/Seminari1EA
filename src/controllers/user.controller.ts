import { Request, Response } from "express";
import user from "../models/user";
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

function updateUser (req: Request, res: Response){
    const id: string = req.params.id;
    const nombre: string = req.body.nombre;
    const apellidos: string = req.body.apellidos;
    const edad: number = req.body.edad;
    const correo: string = req.body.correo;
    const telefono: number = req.body.telefono;
    const grado: string = req.body.grado;
    const courses: string = req.body.courses;
    User.update({"_id": id}, {$set: {"nombre": nombre, "apellidos": apellidos, "edad": edad, 
                              "correo": correo, "telefono": telefono, "grado": grado, "courses": courses}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function deleteUser (req:Request,res:Response){
    User.deleteOne({"_id":req.params.id}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getUsers, getUser, postUserDemo, updateUser, deleteUser };