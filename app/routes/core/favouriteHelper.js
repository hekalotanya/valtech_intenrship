const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL FAVORUTES
async function getAllFavourites() {
  try {
    const allFavourites = await prisma.favourite.findMany();

    return allFavourites;
  } catch (e) {
    console.log(e);
  }
}

// GET FAVORUTE BY ID
async function getFavouriteById(id) {
  try {
    const favourite = await prisma.favourite.findUnique({
      where: {
        id,
      },
    });

    return favourite;
  } catch (e) {
    console.log(e);
  }
}

// CREATE FAVORUTE
async function createFavourite(favouriteObject) {
  try {
    const favourite = await prisma.favourite.create({ data: favouriteObject });

    return favourite;
  } catch (e) {
    console.log(e);
  }
}

// DELETE FAVORUTE BY PARMS
async function deleteFavourite(userId, productId) {
  try {
    const deletedFavourite = await prisma.favourite.deleteMany({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });

    return deletedFavourite;
  } catch (e) {
    console.log(e);
  }
}

// FIND FAVORUTE BY PARMS
async function findFavouriteByParams(userId, productId) {
  try {
    const favourite = await prisma.favourite.findFirst({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });

    return favourite;
  } catch (e) {
    console.log(e);
  }
}

// GET FAVORUTES BY USER ID
async function favouritesByUserId(userId) {
  try {
    const favourites = await prisma.favourite.findMany({
      where: {
        user_id: userId,
      },
      include: {
        product: true,
        product: {
          include: {
            images: true,
          },
        },
        user: true,
      },
    });

    return favourites;
  } catch (e) {
    console.log(e);
  }
}

// GET FAVORUTES LENGTH BY USER ID

async function favLengthByUserId(userId) {
  try {
    const favourites = await prisma.favourite.findMany({
      where: {
        user_id: userId,
      },
    });

    return favourites.length;
  } catch (e) {
    console.log(e);
  }
}

module.exports.getAllFavourites = getAllFavourites;
module.exports.getFavouriteById = getFavouriteById;
module.exports.createFavourite = createFavourite;
module.exports.deleteFavourite = deleteFavourite;
module.exports.favouritesByUserId = favouritesByUserId;
module.exports.favLengthByUserId = favLengthByUserId;
module.exports.findFavouriteByParams = findFavouriteByParams;
