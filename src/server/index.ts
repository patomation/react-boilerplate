import express, { Request, Response } from 'express'
import cors from 'cors'
import { displayTitle } from './lib/displayTitle'
const app = express()

displayTitle()

app
  .use(cors())
  .get('/', function (req: Request, res: Response) {
    res.json({
      data: {
        message: 'trunalimunumaprzure'
      }
    })
  })
  .listen(3050)
