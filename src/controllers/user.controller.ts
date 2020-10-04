//Aqui definimos que hace la app cuando le llega la peticion
import {request, Request, Response} from "express";
import User from "../models/user"

//var Demo = mongoose.model('Demo', demoSchema); ????????

//Hacemos una busqueda en la BBDD de todo lo que hay en demo
//Es una busqueda asincrona, por eso usamos el await
/* export const getUsers = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    const results = await User.find({});
    return res.status(400).json(results);
} */

function getUsers(req:Request, res:Response):void {
    User.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function postUserDemo (req: Request, res: Response): void {
    const name: string = req.body.name;
    const user = new User({name});
    user.save().then((data) => {
         return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

export default { getUsers, postUserDemo };