const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({include: [{model: Product}]})
    res.status(200).json({response: allTags})
  } catch(error){
    res.status(404)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const oneTag = await Tag.findOne({where: {id: req.params.id}, include: [{model: Product}]})
    res.status(200).json({response: oneTag})
  }catch (error) {
    res.status(404).json({message: `failed to find id: ${req.body}`})
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json({ message: 'addition sucessful', newTag: newTag})
  }catch(error){
    res.status(404).json({message: 'new category failed to be created'})
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.findOne({where: {id:req.params.id}})
    updateTag.tag_name = req.body
    res.status(200).json({message: 'update sucessful'})
  }catch(error){
    res.status(404).json({message: 'update failed'})
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.findOne({where: {id: req.params.id}})
    deleteTag.destroy()
    res.status(200).json({message: 'deletion successful'})
  } catch(error){
    res.status(404).json({message: 'deletion failed'})
  }
});

module.exports = router;
