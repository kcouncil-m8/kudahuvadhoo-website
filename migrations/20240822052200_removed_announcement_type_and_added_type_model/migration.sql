/*
  Warnings:

  - You are about to drop the column `announcement_type_id` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the `AnnouncementType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type_id` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_announcement_type_id_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "announcement_type_id",
ADD COLUMN     "type_id" BIGINT NOT NULL;

-- DropTable
DROP TABLE "AnnouncementType";

-- CreateTable
CREATE TABLE "Type" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_dv" TEXT,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
