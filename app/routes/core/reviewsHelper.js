const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL REVIEWS
async function reviews() {
  try {
    const allReviews = await prisma.review.findMany({
      include: {
        user: true,
      },
    });

    return allReviews;
  } catch (e) {
    console.log(e);
  }
}

// GET REVIEW BY ID
async function reviewById(id) {
  try {
    const review = await prisma.review.findUnique({
      where: {
        id,
      },
    });

    return review;
  } catch (e) {
    console.log(e);
  }
}

// CREATE REVIEW
async function createReview(reviewObject) {
  try {
    const review = await prisma.review.create({ data: reviewObject });

    return review;
  } catch (e) {
    console.log(e);
  }
}

module.exports.reviews = reviews;
module.exports.reviewById = reviewById;
module.exports.createReview = createReview;
