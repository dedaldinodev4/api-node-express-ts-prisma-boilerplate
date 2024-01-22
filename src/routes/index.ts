import { Router } from 'express'

import { PREFIX_ROUTE } from '../core/url'; // Prefix Global route
//* Routes *//
import { userRoutes } from './user.routes';
import { postRoutes } from './post.routes';

const routes = Router();

routes.use(`${PREFIX_ROUTE}/users`, userRoutes);
routes.use(`${PREFIX_ROUTE}/posts`, postRoutes);

export { routes }