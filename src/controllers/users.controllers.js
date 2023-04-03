import User from '../model/User.js'

export const getUsers = async (req, res) => {
  const users = await User.find({})
  const total = await User.count()

  if (users) {
    return res.status(200).json({
      message: 'Usuarios retornados con exito',
      total,
      users
    })
  }

  res.status(404).json({
    message: 'No hay usuarios',
    data: []
  })
}

export const getUser = (req, res) => {
  const { id } = req.params
  res.json(`Obtuviste un usuario con el ${id}`)
}

export const createUser = async (req, res) => {
  const {
    email, firstname, lastname, password
  } = req.body

  const user = await User({
    email, firstname, lastname, password
  })

  try {
    user.save()
    res.status(201).json({
      message: `Usuario ${firstname} creado`
    })
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error al crear usuario'
    })
    console.log(error)
  }
}

export const editUser = (req, res) => {
  res.json('Editaste un usuario')
}

export const deleteUser = (req, res) => {
  res.json('Borraste un usuario')
}
