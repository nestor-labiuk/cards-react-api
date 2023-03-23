export const getProducts = (rep, res) => {
  res.json('Obtuviste los productos')
}

export const getProduct = (rep, res) => {
  res.json('Obtuviste un producto')
}

export const createProduct = (rep, res) => {
  res.json('Creaste un  producto')
}

export const editProduct = (rep, res) => {
  res.json('editaste un producto')
}

export const deleteProduct = (rep, res) => {
  res.json('Eliminaste un producto')
}
