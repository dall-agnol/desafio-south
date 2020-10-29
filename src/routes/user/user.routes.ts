import { UserController } from '../../controllers/user/user.controller';
import express from 'express';
const routes = express.Router();
import { validateJWT } from '../../auth/jwt';


export const UserRoutes = [
    routes.post('/user/login', validateJWT, UserController.login),
    routes.post('/user/logout', validateJWT, UserController.logout),
    routes.post('/user/register', UserController.register),
    routes.put('/user/update/:id', validateJWT, UserController.update)

]