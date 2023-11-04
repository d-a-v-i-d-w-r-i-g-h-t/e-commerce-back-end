const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// always need at least 5 routes:
// get all, get one, create, update, delete

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // specify by ID
  // get one category
  // some req.params.nonsense
  // send it back to user
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
  // get the body and get the contents and insert into sequelize
  // category(DOT)create
  // whatever we created we can return it back off the res.json
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
  // taking in an id as a parameter and also receiving a req.body
  // sequelize update
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.status(404).json({ message: 'No category found with this id' });
    return;
  } catch (err) {
    res.status(500).json(err);
  }
  // DESTROY
  // destroying based off the req.params.id
  // res.json to let the server know it's gone
  // always need to send a response
});

module.exports = router;
