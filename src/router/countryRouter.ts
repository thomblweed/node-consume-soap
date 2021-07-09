import { Router } from 'express';

import { getAllCountryNames } from '../handlers/country/getAllCountryNames';

const countryRouter: Router = Router();
countryRouter.get('/getAllCountryNames', getAllCountryNames);

export { countryRouter };
