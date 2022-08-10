import { Router } from 'express';
import { plainPath } from "./controllers/Main"
import { getReleases, getReleaseById, getReleaseByTitle } from './controllers/Release';
const routes = Router();


// ROUTES
routes.get('/', plainPath);
routes.get('/releases/:page', getReleases)
routes.get('/release/id/:id', getReleaseById)
routes.get('/release/t/:title', getReleaseByTitle)
export default routes;
