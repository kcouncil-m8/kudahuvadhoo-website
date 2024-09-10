-- CreateTable
CREATE TABLE "Service" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "title_dv" TEXT,
    "body" TEXT NOT NULL,
    "latin" TEXT,
    "image" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
