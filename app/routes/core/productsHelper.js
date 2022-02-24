const { PrismaClient } = require('@prisma/client');
const { TRUE } = require('sass');
const prisma = new PrismaClient();

// GET ALL PRODCUTS
async function products(skip, take) {
  const allProducts = await prisma.product.findMany({
    skip,
    take,
    include: {
      category: true,
      images: true,
      reviews: true
    }
  })
  return allProducts;
}

//GET ALL PRODCUTS BY PARAMS
async function productsByParams(paramsObject) {
  const products = await prisma.product.findMany({
    where: paramsObject,
    include: {
      category: true,
      images: true,
      reviews: true
    }
  })

  return products;
}

//GET PRODUCT BY ID
async function productById(id) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      images: true,
      reviews: true
    }
  })

  return product;
}

//CREATE PRODUCT
async function createProduct(productObject) {
  const product = await prisma.product.create({ data: productObject })

  return product;
}

//UPDATE PRODUCT BY ID
async function updateProduct(id, productObject) {
const updateProduct = await prisma.product.update({
  where: {
    id,
  },
  data: productObject,
})

  return updateProduct;
}

//DELETE PRODUCT BY ID
async function deleteProduct(id) {
  const deleteProduct = await prisma.product.delete({
    where: {
      id,
    },
  })

  return deleteProduct;
}

module.exports.products = products;
module.exports.productsByParams = productsByParams;
module.exports.productById = productById;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;

