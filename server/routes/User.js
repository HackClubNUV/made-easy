import express from 'express';
const User = express.Router();
import {getUserProgres} from '../controllers/user.js'

User.route('/').get(getUserProgres);
export {User};