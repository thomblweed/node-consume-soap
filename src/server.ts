import express from 'express';

import { startup } from './startup';
import { routes } from './router/routes';

const server = express();
const port: number = 3001;

server.use('/api', routes);

server.listen(port, async () => {
  console.log(`server started on port ${port}`);
  startup();
});
