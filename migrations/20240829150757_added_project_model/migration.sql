-- CreateTable
CREATE TABLE "Project" (
    "id" BIGSERIAL NOT NULL,
    "percentage" DOUBLE PRECISION,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "price" DOUBLE PRECISION,
    "started_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "duration" INTEGER,
    "description" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
