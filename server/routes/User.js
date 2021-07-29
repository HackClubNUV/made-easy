import express from 'express';
const User = express.Router();
import {getUserProgres, getAllUsers} from '../controllers/user.js'

User.route('/').get(getUserProgres);
User.route('/users').get(getAllUsers);
export {User};