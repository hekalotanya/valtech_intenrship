const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL ORDERS
async function orders() {
  const allOrders = await prisma.order.findMany()
  return allOrders;
}

//GET ORDER BY ID
async function orderById(id) {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  })

  return order;
}

//CREATE ORDERS
async function createOrder(orderObject) {
  const order = await prisma.order.create({ data: orderObject })

  return order;
}


//DELETE ORDERS BY ID
async function deleteOrder(id) {
  const deleteOrder = await prisma.order.delete({
    where: {
      id,
    },
  })

  return deleteOrder;
}

module.exports.orders = orders;
module.exports.orderById = orderById;
module.exports.createOrder = createOrder;
module.exports.deleteOrder = deleteOrder;
