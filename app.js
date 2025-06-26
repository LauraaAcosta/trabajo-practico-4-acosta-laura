import express from 'express';
import { sequelize, connectDB } from './config/database.js';
import characterRoutes from './routes/character.routes.js';

const app = express();

app.use(express.json());

app.use('/api', characterRoutes);

const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada!');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

startServer();

export default app;