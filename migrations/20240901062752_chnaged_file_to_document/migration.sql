/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_type_id_fkey";

-- DropTable
DROP TABLE "File";

-- CreateTable
CREATE TABLE "Document" (
    "id" BIGSERIAL NOT NULL,
    "type_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "name_dv" TEXT,
    "date_created" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_open" TIMESTAMPTZ,
    "date_expiry" TIMESTAMPTZ,
    "file" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
