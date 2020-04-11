import {Router} from "express";
import admin from './admin';

const routes = Router();

routes.use('/admin',admin);

export default routes;

