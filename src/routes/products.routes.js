import { Router } from 'express'
import { getProducts, getProduct, createProduct, editProduct, deleteProduct } from '.././controllers/products.controllers.js'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/', editProduct)
router.delete('/', deleteProduct)

export default router
