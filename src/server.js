import express from 'express'
import { usersRoutes, productsRoutes } from './routes/index.js'
import cors from 'cors'
import { dbConection } from './db/config.js'
export class Server {
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
    this.conectionDb()
  }

  async conectionDb () {
    await dbConection()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes () {
    this.app.use('/api/users', usersRoutes)
    this.app.use('/api/products', productsRoutes)
  }

  listen () {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    })
  }
}
