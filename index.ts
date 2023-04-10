import express, { Application } from 'express';
import { createServer } from 'http';
import helmet from 'helmet';
import dotenv from 'dotenv'

import { logger } from './src/middlewares/logger';
import { router } from './src/configs/routers';

dotenv.config()

const app: Application = express()
const server = createServer(app)
const port = process.env.PORT || 3000

app.use(helmet())
app.use(logger)
app.use(express.json())
app.use('/', router)

app.get('/index', (request, response) => response.send('index'))

server.listen(port, () => console.log(`running port: ${port}`))
 
