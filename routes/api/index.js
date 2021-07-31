const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);// The `/api/categories` endpoint
router.use('/products', productRoutes);// The `/api/products` endpoint
router.use('/tags', tagRoutes);// The `/api/tags` endpoint

module.exports = router;
