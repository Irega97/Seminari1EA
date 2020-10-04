//Interfaces
import { model, Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const userSchema = new Schema({
    name: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface IUser extends Document {
    name: string;
}

//Exportamos modelo para poder usarlo
export default model<IUser>('User', userSchema);