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

//CREATE ORDER
async function createOrder(orderObject) {
  const order = await prisma.order.create({ data: orderObject })

  return order.id;
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


// CREATE ORDER PRODUCT
async function createOrderProduct(orderProductObject) {
  const orderProduct = await prisma.order_product.create({ data: orderProductObject })

  return orderProduct;
}


module.exports.orders = orders;
module.exports.orderById = orderById;
module.exports.createOrder = createOrder;
module.exports.deleteOrder = deleteOrder;
module.exports.createOrderProduct = createOrderProduct;
