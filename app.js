import express from 'express';
import dotenv from 'dotenv';
import  {connectDB} from './src/config/database.js';
import characterRoutes from './routes/character.routes.js';

dotenv.config()
const app = express();

app.use(express.json());

app.use('/api', characterRoutes);

connectDB().then(() =>{
    app.listen(prototype, () =>{
        console.log(`Servidor corriendo en http:localhost:%{PORT}`)
    })
})
