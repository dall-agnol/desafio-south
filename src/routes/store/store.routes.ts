import { StoreController } from '../../controllers/store/store.controller';
import { validateJWT } from '../../auth/jwt';

import express from 'express';
const routes = express.Router();


export const StoreRoutes = [
    routes.post('/store/add', validateJWT, StoreController.createUser),
    routes.get('/store/edit/:id',validateJWT, StoreController.createUser),
    routes.delete('/store/delete/:id',validateJWT, StoreController.createUser),
    routes.get('/store/list', StoreController.createUser),


]