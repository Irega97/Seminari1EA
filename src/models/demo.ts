//Interfaces
import { model, Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const demoSchema = new Schema({
    name: {
        type: String
    }
});

//Interfaz para tratar respuesta
export interface IDemo extends Document {
    name: string;
}

//Exportamos modelo para poder usarlo
export default model<IDemo>('Demo', demoSchema);