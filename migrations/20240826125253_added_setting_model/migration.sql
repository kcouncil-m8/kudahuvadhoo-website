-- CreateTable
CREATE TABLE "Setting" (
    "id" BIGSERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);
