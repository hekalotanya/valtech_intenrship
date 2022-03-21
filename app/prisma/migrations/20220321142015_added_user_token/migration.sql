-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "user_id" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT;
