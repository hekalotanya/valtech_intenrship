const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL ORDERS
async function orders() {
  try {
    const allOrders = await prisma.order.findMany();

    return allOrders;
  } catch (e) {
    console.log(e);
  }
}

// GET ORDER BY ID
async function orderById(id) {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
    });

    return order;
  } catch (e) {
    console.log(e);
  }
}

// CREATE ORDER
async function createOrder(orderObject) {
  try {
    const order = await prisma.order.create({ data: orderObject });

    return order.id;
  } catch (e) {
    console.log(e);
  }
}

// DELETE ORDERS BY ID
async function deleteOrder(id) {
  try {
    const deleteOrder = await prisma.order.delete({
      where: {
        id,
      },
    });

    return deleteOrder;
  } catch (e) {
    console.log(e);
  }
}

// CREATE ORDER PRODUCT
async function createOrderProduct(orderProductObject) {
  try {
    const orderProduct
      = await prisma.order_product.create({ data: orderProductObject });

    return orderProduct;
  } catch (e) {
    console.log(e);
  }
}

// GET ORDER BY USER ID
async function ordersByUserId(userId) {
  try {
    const order = await prisma.order.findMany({
      where: {
        user_id: userId,
      },
      include: {
        products: true,
        products: {
          include: {
            product: true,
            product: {
              include: {
                images: true,
              },
            },
          },
        },
      },
    });

    return order;
  } catch (e) {
    console.log(e);
  }
}

module.exports.orders = orders;
module.exports.orderById = orderById;
module.exports.createOrder = createOrder;
module.exports.deleteOrder = deleteOrder;
module.exports.createOrderProduct = createOrderProduct;
module.exports.ordersByUserId = ordersByUserId;
