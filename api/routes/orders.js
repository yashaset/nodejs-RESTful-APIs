const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched!',
  });
});
router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: 'Orders created!',
    order: order,
  });
});
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (id === 'special') {
    res.status(200).json({
      message: 'Order Details',
      OrderId: id,
    });
  } else {
    res.status(200).json({
      message: 'You passed an id',
    });
  }
});
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  if (id === 'special') {
    res.status(200).json({
      message: 'Order Deleted!',
      OrderId: id,
    });
  } else {
    res.status(200).json({
      message: 'Whattttttttttttttttt',
    });
  }
});

module.exports = router;
