import express, { Router } from 'express'
import * as fs from 'fs'
import cors from 'cors'
import bodyParser from 'body-parser'

export class Server {
  public app: any

  constructor () {
    this.app = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router: any = express.Router()
    router.use(cors())
    router.use(bodyParser())

    router.post('/alarms/', async (req: express.Request, res: express.Response) => {
      const val = req.body
      console.log(val)
      let content = fs.readFileSync('alarms.txt', 'utf8')
      let obj = JSON.parse(content)
      obj.alarmas.push(val)
      fs.writeFileSync('alarms.txt', JSON.stringify(obj))
      res.status(200).json({response: true})
    })

    router.get('/ping', async (req: express.Request, res: express.Response) => {
      res.send(true) 
    })
    
    // Set router location
    this.app.use('/', router)
  }
}