/*
  Warnings:

  - You are about to drop the `Announcement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_type_id_fkey";

-- DropTable
DROP TABLE "Announcement";

-- CreateTable
CREATE TABLE "File" (
    "id" BIGSERIAL NOT NULL,
    "type_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "name_dv" TEXT,
    "date_created" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_open" TIMESTAMPTZ,
    "date_expiry" TIMESTAMPTZ,
    "file" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
