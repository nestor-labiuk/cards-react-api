import express from 'express'
import userRoutes from './routes/users.routes.js'

export class Server {

  constructor() {
    this.app = express()
    this.routes()
  }

  routes() {
    this.app.use('/api', userRoutes)
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servisor corriendo en el puerto 8080')
    })
  }
}
