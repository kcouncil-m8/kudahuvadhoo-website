-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "date_created" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "name_dv" TEXT;
