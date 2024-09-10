-- CreateTable
CREATE TABLE "AnnouncementType" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_dv" TEXT,

    CONSTRAINT "AnnouncementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" BIGSERIAL NOT NULL,
    "announcement_type_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "name_dv" TEXT,
    "date_created" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_open" TIMESTAMPTZ,
    "date_expiry" TIMESTAMPTZ,
    "file_upload" TEXT,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_announcement_type_id_fkey" FOREIGN KEY ("announcement_type_id") REFERENCES "AnnouncementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
