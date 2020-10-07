//Interfaces
import mongoose, { Schema, Document} from 'mongoose';
import Course, { ICourse } from './course';

//Interfaz para tratar respuesta como documento
export interface IUser extends Document {
    nombre: string;
    apellidos: string;
    edad: number;
    correo: string;
    telefono: number;
    grado: string;
    courses: ICourse['_id']; //Relacion con la coleccion courses
}

//Modelo de objeto que se guarda en la BBDD de MongoDB
const userSchema = new Schema({
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
        type : String
    },
    telefono: {
        type:Number
    },
    grado: {
        type:String
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: Course
    }]
});

//Exportamos modelo para poder usarlo
export default mongoose.model<IUser>('User', userSchema);