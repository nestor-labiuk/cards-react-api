import mongoose from 'mongoose'

export const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION)
    console.log('Conección exitosa')
  } catch (error) {
    console.log('Falló la conección')
  }
}
