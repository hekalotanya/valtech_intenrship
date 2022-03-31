const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL SUBSCRIBERS
async function getAllsubscribers() {
  try {
    const allSubscribers = await prisma.subscriber.findMany();

    return allSubscribers;
  } catch (e) {
    console.log(e);
  }
}

// GET  SUBSCRIBER
async function getSubscriberByEmail(email) {
  try {
    const subscriber = await prisma.subscriber.findFirst({
      where: {
        email,
      },
    });

    return subscriber;
  } catch (e) {
    console.log(e);
  }
}

// CREATE SUBSCRIBER
async function createSubscriber(email) {
  try {
    const subscriber = await prisma.subscriber.create({ data: {
      email,
    } });

    return subscriber;
  } catch (e) {
    console.log(e);
  }
}

// UPDATE SUBSCRIBER BY EMAIL
async function updateSubscriber(email, newEmail) {
  try {
    const updatedSubscriber = await prisma.subscriber.update({
      where: {
        email,
      },
      data: {
        email: newEmail,
      },
    });

    return updatedSubscriber;
  } catch (e) {
    console.log(e);
  }
}

// DELETE SUBSCRIBER BY EMAIL
async function deleteSubscriber(email) {
  try {
    const deletedSubscriber = await prisma.subscriber.delete({
      where: {
        email,
      },
    });

    return deletedSubscriber;
  } catch (e) {
    console.log(e);
  }
}

module.exports.getAllsubscribers = getAllsubscribers;
module.exports.createSubscriber = createSubscriber;
module.exports.updateSubscriber = updateSubscriber;
module.exports.deleteSubscriber = deleteSubscriber;
module.exports.getSubscriberByEmail = getSubscriberByEmail;
