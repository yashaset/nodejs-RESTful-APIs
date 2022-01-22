const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /products',
  });
});
router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json({
    message: 'Handling POST request to /products',
    createdProduct: product,
  });
});
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the id',
      id: id,
    });
  } else {
    res.status(200).json({
      message: 'You passed an id',
    });
  }
});

module.exports = router;
