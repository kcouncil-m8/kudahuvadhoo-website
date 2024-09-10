-- CreateTable
CREATE TABLE "Member" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "about" TEXT,
    "image" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
