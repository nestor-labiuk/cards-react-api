export const getUsers = (req, res) => {
  res.json('Obtuviste los usuarios')
}

export const getUser = (req, res) => {
  const { id } = req.params
  res.json(`Obtuviste un usuario con el ${id}`)
}

export const createUser = (req, res) => {
  res.json('Creaste un usuario')
}

export const editUser = (req, res) => {
  res.json('Editaste un usuario')
}

export const deleteUser = (req, res) => {
  res.json('Borraste un usuario')
}
