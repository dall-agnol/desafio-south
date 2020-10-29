
import { UserRoutes } from './user/user.routes';
import { StoreRoutes } from './store/store.routes';

import express from 'express';
const routes = express.Router();



routes.use(UserRoutes);
routes.use(StoreRoutes);
export default routes;