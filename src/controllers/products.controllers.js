export const getProducts = (req, res) => {
  res.json('Obtuviste los productos')
}

export const getProduct = (req, res) => {
  const { id } = req.params
  res.json(`Obtuviste un producto con el ${id}`)
}

export const createProduct = (req, res) => {
  res.json('Creaste un  producto')
}

export const editProduct = (req, res) => {
  res.json('editaste un producto')
}

export const deleteProduct = (req, res) => {
  res.json('Eliminaste un producto')
}
