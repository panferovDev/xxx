-- CreateTable
CREATE TABLE "PairDays" (
    "id" SERIAL NOT NULL,
    "dayName" TEXT NOT NULL,
    "dayType" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,

    CONSTRAINT "PairDays_pkey" PRIMARY KEY ("id")
);
