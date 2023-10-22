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
    const oneCategory = await Category.findOne({where: id = `${req.params.idid}`})
    res.status(200).json({response: oneCategory})
  }catch (error) {
    res.status(404).json({message: `failed to find id: ${req.body}`})
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({ message: 'addition sucessful', newCategory: newCategory})
  }catch(error){
    res.status(404).json({message: 'new category failed to be created'})
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.findOne({where: id = req.params.id})
    updateCategory.category_name = req.body
    res.status(200).json({message: 'update sucessful'})
  }catch(error){
    res.status(404).json({message: 'update failed'})
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.findOne({where: id = req.params.id})
    deleteCategory.delete()
    res.status(200).json({message: 'deletion successful'})
  } catch(error){
    res.status(404).json({message: 'deletion failed'})
  }
});

module.exports = router;
