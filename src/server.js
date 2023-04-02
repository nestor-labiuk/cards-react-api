import express from 'express'
import { usersRoutes, productsRoutes } from './routes/index.js'

export class Server {
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
  }

  routes () {
    this.app.use('/api/users', usersRoutes)
    this.app.use('/api/products', productsRoutes)
  }

  listen () {
    this.app.listen(8080, () => {
      console.log('Servisor corriendo en el puerto 8080')
    })
  }
}
