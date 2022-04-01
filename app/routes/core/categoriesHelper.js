const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL CATEGORIES
async function categories() {
  try {
    const allCategories = await prisma.category.findMany();

    return allCategories;
  } catch (e) {
    console.log(e);
  }
}

// GET CATEGORY BY ID
async function categoryById(id) {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    return category;
  } catch (e) {
    console.log(e);
  }
}

// CREATE CATEGORY
async function createCategory(categoryObject) {
  try {
    const category = await prisma.category.create({ data: categoryObject });

    return category;
  } catch (e) {
    console.log(e);
  }
}

// UPDATE CATEGORY BY ID
async function updateCategory(id, categoryObject) {
  try {
    const updateCategory = await prisma.category.update({
      where: {
        id,
      },
      data: categoryObject,
    });

    return updateCategory;
  } catch (e) {
    console.log(e);
  }
}

// DELETE CATEGORY BY ID
async function deleteCategory(id) {
  try {
    const deleteCategory = await prisma.category.delete({
      where: {
        id,
      },
    });

    return deleteCategory;
  } catch (e) {
    console.log(e);
  }
}

module.exports.categories = categories;
module.exports.categoryById = categoryById;
module.exports.createCategory = createCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;
