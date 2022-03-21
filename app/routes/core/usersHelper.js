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
  try {
    const user = await prisma.user.create({ data: userObject })
    return user;
  } catch(e) {
    console.log(e);
  }}

//UPDATE USER
async function updateUser(userId, userData) {
  try {
    const user = await prisma.user.update({ 
      where: {
        id: userId,
      },
      data: userData,
    })
    return user;
  } catch(e) {
    console.log(e);
}}


module.exports = {
  users,
  userById,
  createUser,
  usersByParams,
  userFirst,
  updateUser,
}
