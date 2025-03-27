
import express from 'express';
import {loginuser} from '../controllers/user.js'
const log = express.Router()

log.get('/',loginuser);

export default log