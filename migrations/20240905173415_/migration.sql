/*
  Warnings:

  - You are about to drop the column `body` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `latin` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "body",
DROP COLUMN "image",
DROP COLUMN "latin",
ADD COLUMN     "file" TEXT;
