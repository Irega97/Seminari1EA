import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const courseSchema = new Schema({
    nombre: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface ICourse extends Document {
    nombre: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<ICourse>('Course', courseSchema);