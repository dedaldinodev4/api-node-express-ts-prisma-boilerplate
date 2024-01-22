import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { routes } from './routes';
import { ErrorInternal } from './helpers/ErrorInternal';


const server = express();
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'))
server.use(routes)
server.use(ErrorInternal)

export { server }