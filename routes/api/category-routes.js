const router = require('express').Router();
const { dropAllSchemas } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({include: [{model: Product}]})
    return allCategories
  } catch(error){
    res.status(404)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findAll({where: id = `${req.body}`})
    return oneCategory
  }catch (error) {
    res.status(404)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    
  }catch(error){
    res.status(404)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
