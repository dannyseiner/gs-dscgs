import { Router } from 'express';
import { plainPath } from "./controllers/Main"
import { getReleases, getReleaseById, getReleaseByTitle, getReleasesFilter } from './controllers/Release';
const routes = Router();


// ROUTES
routes.get('/', plainPath);
routes.get('/releases/:page', getReleases)
routes.get('/releases/:page/:filter', getReleasesFilter)
routes.get('/release/id/:id', getReleaseById)
routes.get('/release/t/:title', getReleaseByTitle)
export default routes;
