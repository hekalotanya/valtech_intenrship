const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL USERS
async function users() {
  try {
    const allUsers = await prisma.user.findMany();

    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

// GET USER WITH PARAM
async function usersByParams(paramsObj) {
  try {
    const Users = await prisma.user.findMany({
      where: paramsObj,
    });

    return Users;
  } catch (e) {
    console.log(e);
  }
}

// GET ONE USER
async function userFirst(paramsObj) {
  try {
    const Users = await prisma.user.findFirst({
      where: paramsObj,
    });

    return Users;
  } catch (e) {
    console.log(e);
  }
}

// GET USER BY ID
async function userById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (e) {
    console.log(e);
  }
}

// CREATE USER
async function createUser(userObject) {
  try {
    const user = await prisma.user.create({ data: userObject });

    return user;
  } catch (e) {
    console.log(e);
  }
}

// UPDATE USER
async function updateUser(userId, userData) {
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: userData,
    });

    return user;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  users,
  userById,
  createUser,
  usersByParams,
  userFirst,
  updateUser,
};
