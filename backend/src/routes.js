import { Router } from 'express';
import { plainPath } from "./controllers/Main"
import { getReleases } from './controllers/Release';
const routes = Router();




routes.get('/', plainPath);
routes.get('/releases/:page', getReleases)
export default routes;
