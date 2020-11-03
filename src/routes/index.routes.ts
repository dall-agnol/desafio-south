
import { UserRoutes } from './user/user.routes';
import { StoreRoutes } from './store/store.routes';

import express from 'express';
const routes = express.Router();

routes.get('/', async (req, res) => {
    return res.status(200).send({
        message: 'API em Node.js para desafio'
    })
})
routes.use(UserRoutes);
routes.use(StoreRoutes);
export default routes;