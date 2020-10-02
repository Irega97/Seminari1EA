//Aqui definimos que hace la app cuando le llega la peticion
import {Request, Response} from "express";
import Demo from "../models/demo"

//Hacemos una busqueda en la BBDD de todo lo que hay en demo
//Es una busqueda asincrona, por eso usamos el await
export const demo = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    const results = await Demo.find({});
    return res.status(400).json(results);
}