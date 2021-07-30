import express from 'express';
const User = express.Router();
import {getUserProgres, getAllUsers} from '../controllers/user.js'

User.route('/').post(getUserProgres);
User.route('/users').get(getAllUsers);
export {User};