const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');

router.use(cors());


/* GET products listing. */
router.get('/', async function(req, res, next) {
  res.render('shop_cart',{
        title: 'Shop Cart',
  });
});

router.post('/', async function(req, res, next) {
  let cartProducts = [];
  const listOfId = req.body;

  async function getProduct(id) {
    const response =  await productsHelper.productById(id);
    return response;
  }

  listOfId.map(id => {
    const product = getProduct(id);
    cartProducts.push(product);
  })

  if (cartProducts) {
    cartProducts = await Promise.all(cartProducts);
  }

  if (cartProducts) {
    res.render('shop_cart',{
      title: 'Shop Cart',
      products: cartProducts,
    });
  } else {
    res.render('shop_cart',{
      title: 'Shop Cart',
      noResult: true,
    });
  }
});

module.exports = router;
