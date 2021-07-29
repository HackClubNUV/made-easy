import express from 'express';
const djs= express.Router();
import {getDiscordResources} from '../controllers/discordResources.js'

djs.route('/').get(getDiscordResources);
export {djs};