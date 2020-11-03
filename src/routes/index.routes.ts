
import { UserRoutes } from './user/user.routes';
import { StoreRoutes } from './store/store.routes';

import express from 'express';
const routes = express.Router();

const indexRoutes = [
    routes.get('/', (req, res) => {
        return res.status(200).send({
            message: 'API em Node.js para desafio'
        })
    })
]
routes.use(indexRoutes)
routes.use(UserRoutes);
routes.use(StoreRoutes);
export default routes;