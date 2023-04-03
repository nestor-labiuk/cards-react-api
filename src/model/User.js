import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    require: [true, 'El mail es obligatorio']
  },
  firstname: {
    type: String,
    require: [true, 'El nombre es obligatorio']
  },
  lastname: {
    type: String,
    require: [true, 'El apellido es obligatorio']
  },
  password: {
    type: String,
    require: [true, 'La contraseña es obligatoria']
  }
})

export default model('User', UserSchema)
