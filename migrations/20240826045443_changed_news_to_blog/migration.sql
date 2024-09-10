/*
  Warnings:

  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_categoryId_fkey";

-- DropTable
DROP TABLE "News";

-- CreateTable
CREATE TABLE "Blog" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "title_dv" TEXT,
    "body" TEXT NOT NULL,
    "latin" TEXT,
    "image" TEXT,
    "categoryId" BIGINT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
