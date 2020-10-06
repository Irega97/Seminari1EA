//Interfaces
import { model, Schema, Document} from 'mongoose';

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
    }
});

//Interfaz para tratar respuesta como documento
export interface IUser extends Document {
    nombre: string;
    apellidos: string;
    edad: number;
    correo: string;
    telefono: number;
    grado: string;
}

//Exportamos modelo para poder usarlo
export default model<IUser>('User', userSchema);