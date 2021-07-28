import express from 'express';
const Router = express.Router();
import {getAnswer} from '../controllers/webhook.js'

Router.route('/').post(getAnswer);
export {Router};