import express from 'express';

import routes from './routes';
import { initDB } from './db';

// initialize firebase
initDB();

const app = express();
const port = 8080;

// define a route handler for the default home page
app.use(express.json());
app.use("/api", routes);

// start the Express server
app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});