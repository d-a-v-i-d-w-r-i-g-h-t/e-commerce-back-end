const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productsData = await Product.findAll({
      include: [
        { model: Category, attributes: ['id', 'category_name'] },
        { model: Tag, attributes: ['id', 'tag_name'], through: ProductTag },
      ],
    });
    res.status(200).json(productsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one product
router.get('/:id', async (req, res) => {
  try {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category, attributes: ['id', 'category_name'] },
        { model: Tag, attributes: ['id', 'tag_name'], through: ProductTag },
      ],
    });
  
    // check if the product with that ID exists
    if (!productData) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
  
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create (POST) new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    // create a new product with data provided in request body
    const newProduct = await Product.create(req.body);

    // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: newProduct.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    
    res.status(200).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update (PUT) product
router.put('/:id', async (req, res) => {
  try {
    // update product data
    const [rowsUpdated, [updatedProduct]] = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    if (rowsUpdated === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    // if there are tags, update the associations in the ProductTag model
    if (req.body.tagIds && req.body.tagIds.length) {
      
      const productTags = await ProductTag.findAll({
        where: {
          product_id: req.params.id,
        }
      });
      
      // create filtered list of new tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }
  
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// DELETE one product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    // check if successfully deleted
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json({ message: 'Product successfully deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
