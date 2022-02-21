const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL USERS
async function users() {
  const allUsers = await prisma.user.findMany()
  return allUsers;
}

//GET USER BY ID
async function userById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  return user;
}

//CREATE USER
async function createUser(userObject) {
  const user = await prisma.user.create({ data: userObject })

  return user;
}

module.exports.users = users;
module.exports.userById = userById;
module.exports.createUser = createUser;
