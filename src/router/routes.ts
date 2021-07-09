import { Router } from 'express';

import { countryRouter } from './countryRouter';

const routes: Router = Router();
routes.use(countryRouter);

export { routes };
