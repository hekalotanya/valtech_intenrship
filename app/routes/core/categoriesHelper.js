const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL CATEGORIES
async function categories() {
  const allCategories = await prisma.category.findMany()
  return allCategories;
}

//GET CATEGORY BY ID
async function categoryById(id) {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  })

  return category;
}

//CREATE CATEGORY
async function createCategory(categoryObject) {
  const category = await prisma.category.create({ data: categoryObject })

  return category;
}

//UPDATE CATEGORY BY ID
async function updateCategory(id, categoryObject) {
const updateCategory = await prisma.category.update({
  where: {
    id,
  },
  data: categoryObject,
})

  return updateCategory;
}

//DELETE CATEGORY BY ID
async function deleteCategory(id) {
  const deleteCategory = await prisma.category.delete({
    where: {
      id,
    },
  })

  return deleteCategory;
}

module.exports.categories = categories;
module.exports.categoryById = categoryById;
module.exports.createCategory = createCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;
