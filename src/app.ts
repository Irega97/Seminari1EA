import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//initializations
const app = express();

//settings
//Cuando haya variable de entorno sera PORT y sino 3000
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
//Cuando le llegue una peticion de tipo GET mostrará ese mensaje
app.get('/', (req,res) => {
    return res.send(`The API is at http://localhost:${app.get('port')}`);
})

//exportamos fichero como 'app'
export default app;
