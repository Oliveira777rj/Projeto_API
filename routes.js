import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload'
import SessionControllers from './controllers/SessionControllers';
import HouseController from './controllers/HouseController';
import House from './models/House';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControllers.store);

routes.post('/houses', upload.single('thumbnail'),HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'),HouseController.update);
routes.delete('/houses',HouseController.destroy)


export default routes;