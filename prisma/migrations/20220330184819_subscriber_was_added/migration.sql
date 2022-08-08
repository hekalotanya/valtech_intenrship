-- CreateTable
CREATE TABLE "Subscriber" (
    "email" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_email_key" ON "Subscriber"("email");
