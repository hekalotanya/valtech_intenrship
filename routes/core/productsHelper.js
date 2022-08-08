const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL PRODCUTS
async function products(skip, take) {
  try {
    const allProducts = await prisma.product.findMany({
      include: {
        category: true,
        images: true,
        reviews: true,
      },
      skip,
      take,
    });

    return allProducts;
  } catch (e) {
    console.log(e);
  }
}

// GET ALL PRODCUTS BY PARAMS
async function productsByParams(paramsObject, skip, take, orderObject) {
  try {
    const products = await prisma.product.findMany({
      orderBy: orderObject,
      where: paramsObject,
      include: {
        category: true,
        images: true,
        reviews: true,
      },
      skip,
      take,
    });

    return products;
  } catch (e) {
    console.log(e);
  }
}

// GET RESULT LENGTH

async function resultLength(paramsObject) {
  try {
    const productsLength = await prisma.product.count({
      where: paramsObject,
    });

    return productsLength;
  } catch (e) {
    console.log(e);
  }
}

// GET PRODUCT BY ID
async function productById(id) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        images: true,
        reviews: true,
        reviews: {
          include: {
            user: true,
          },
        },
      },
    });

    return product;
  } catch (e) {
    console.log(e);
  }
}

// CREATE PRODUCT
async function createProduct(productObject) {
  try {
    const product = await prisma.product.create({ data: productObject });

    return product;
  } catch (e) {
    console.log(e);
  }
}

// UPDATE PRODUCT BY ID
async function updateProduct(id, productObject) {
  try {
    const updateProduct = await prisma.product.update({
      where: {
        id,
      },
      data: productObject,
    });

    return updateProduct;
  } catch (e) {
    console.log(e);
  }
}

// DELETE PRODUCT BY ID
async function deleteProduct(id) {
  try {
    const deleteProduct = await prisma.product.delete({
      where: {
        id,
      },
    });

    return deleteProduct;
  } catch (e) {
    console.log(e);
  }
}

module.exports.products = products;
module.exports.productsByParams = productsByParams;
module.exports.productById = productById;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.resultLength = resultLength;
