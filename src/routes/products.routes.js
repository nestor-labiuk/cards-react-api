import { Router } from 'express'
import { getProducts, getProduct, createProduct, editProduct, deleteProduct } from '.././controllers/products.controllers.js'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/:id', createProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteProduct)

export default router
