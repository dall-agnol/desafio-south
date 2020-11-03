import { StoreController } from '../../controllers/store/store.controller';
import { validateJWT } from '../../auth/jwt';

import express from 'express';
const routes = express.Router();


export const StoreRoutes = [
    routes.post('/store/add', validateJWT, StoreController.insert),
    routes.put('/store/edit/:id',validateJWT, StoreController.update),
    routes.delete('/store/delete/:id',validateJWT, StoreController.delete),
    routes.get('/store/list', validateJWT, StoreController.list),
    routes.get('/store/listById/:id', validateJWT, StoreController.getById),



]