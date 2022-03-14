const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL USERS
async function users() {
  const allUsers = await prisma.user.findMany()
  return allUsers;
}

// GET USER WITH PARAM
async function usersByParams(paramsObj) {
  const Users = await prisma.user.findMany({
    where: paramsObj,
  })
  return Users;
}

// GET ONE USER
async function userFirst(paramsObj) {
  const Users = await prisma.user.findFirst({
    where: paramsObj,
  })
  return Users;
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
module.exports.usersByParams = usersByParams;
module.exports.userFirst = userFirst;
