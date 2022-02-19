const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function prodcuts() {
  const allProducts = await prisma.product.findMany()
  console.log(allProducts, allProducts.length)
}

async function categories() {
  const allCategories = await prisma.category.findMany({
    where: {
      id: 3,
    },
    select: {
      Products: true,
    }
  })
  console.log(JSON.stringify(allCategories, null, 2))
}

async function prodcutsByParams(param, value) {
  const products = await prisma.product.findMany({
    where: {
      [param]: value,
    },
  })

  console.log(products);
}


async function productById(id) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  console.log(product);
}

// prodcutsByParams('color', 'green');

// productById(120);


