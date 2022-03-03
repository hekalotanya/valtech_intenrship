const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL REVIEWS
async function reviews() {
  const allReviews = await prisma.review.findMany({
    include: {
      user: true,
    }
  })
  return allReviews;
}

//GET REVIEW BY ID
async function reviewById(id) {
  const review = await prisma.review.findUnique({
    where: {
      id,
    },
  })

  return review;
}

//CREATE REVIEW
async function createReview(reviewObject) {
  const review = await prisma.review.create({ data: reviewObject })

  return review;
}

module.exports.reviews = reviews;
module.exports.reviewById = reviewById;
module.exports.createReview = createReview;
