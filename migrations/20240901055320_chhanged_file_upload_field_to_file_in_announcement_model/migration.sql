/*
  Warnings:

  - You are about to drop the column `file_upload` on the `Announcement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "file_upload",
ADD COLUMN     "file" TEXT;
