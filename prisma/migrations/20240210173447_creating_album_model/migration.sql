-- CreateTable
CREATE TABLE "Album" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "band" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);
