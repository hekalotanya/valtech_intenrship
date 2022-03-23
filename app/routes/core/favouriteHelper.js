const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL FAVORUTES
async function getAllFavourites() {
  const allFavourites = await prisma.favourite.findMany()
  return allFavourites;
}

//GET FAVORUTE BY ID
async function getFavouriteById(id) {
  const favourite = await prisma.favourite.findUnique({
    where: {
      id,
    },
  })

  return favourite;
}

//CREATE FAVORUTE
async function createFavourite(favouriteObject) {
  const favourite = await prisma.favourite.create({ data: favouriteObject })

  return favourite;
}


//DELETE FAVORUTE BY PARMS
async function deleteFavourite(userId, productId) {
  const deletedFavourite = await prisma.favourite.deleteMany({
    where: {
      user_id: userId,
      product_id: productId,
    },
  })

  return deletedFavourite;
}


// GET FAVORUTES BY USER ID
async function favouritesByUserId(userId) {
  const favourites = await prisma.favourite.findMany({
    where: {
      user_id: userId,
    },
    include: {
      product: true,
      product: {
        include: {
          images: true,
        }
      },
      user: true,
    }
  })

  return favourites;
}


module.exports.getAllFavourites = getAllFavourites;
module.exports.getFavouriteById = getFavouriteById;
module.exports.createFavourite = createFavourite;
module.exports.deleteFavourite = deleteFavourite;
module.exports.favouritesByUserId = favouritesByUserId;