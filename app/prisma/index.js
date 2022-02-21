const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL PRODCUTS
async const products = () => {
  const allProducts = await prisma.product.findMany()
  console.log(allProducts, allProducts.length)
}

// GET ALL USERS
async function users() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers, allUsers.length)
}

// GET ALL IMAGES
async function images() {
  const allImages = await prisma.image.findMany()
  console.log(allImages)
}


//GET ALL CATEGORIES
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


//GET ALL PRODCUTS BY PARAMS
async function prodcutsByParams(param, value) {
  const products = await prisma.product.findMany({
    where: {
      [param]: value,
    },
  })

  console.log(products);
}


//GET PRODUCT BY ID
async function productById(id) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      images: true,
      reviews: true
    }
  })

  return product;
}

// prodcutsByParams('color', 'green');

const product = productById(156).then(responce => {
  console.log(responce.images[0].path);
})

// users();


