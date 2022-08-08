/*
  Warnings:

  - You are about to drop the column `totalPice` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Order_product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Order_product` table. All the data in the column will be lost.
  - Added the required column `date` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `Order_product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order_product" DROP CONSTRAINT "Order_product_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order_product" DROP CONSTRAINT "Order_product_productId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "totalPice",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "total_price" INTEGER NOT NULL,
ALTER COLUMN "user_phone" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Order_product" DROP COLUMN "orderId",
DROP COLUMN "productId",
ADD COLUMN     "order_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_product" ADD CONSTRAINT "Order_product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_product" ADD CONSTRAINT "Order_product_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
