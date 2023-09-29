/*
  Warnings:

  - You are about to drop the column `scheduleId` on the `Subgroup` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Subgroup` table. All the data in the column will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gadId` to the `Subgroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subgroup" DROP CONSTRAINT "Subgroup_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Subgroup" DROP CONSTRAINT "Subgroup_studentId_fkey";

-- DropIndex
DROP INDEX "Subgroup_scheduleId_studentId_key";

-- AlterTable
ALTER TABLE "Subgroup" DROP COLUMN "scheduleId",
DROP COLUMN "studentId",
ADD COLUMN     "gadId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Schedule";

-- CreateTable
CREATE TABLE "Days" (
    "id" SERIAL NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupActivityDays" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "dayId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "GroupActivityDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pairs" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "subgroupId" INTEGER NOT NULL,

    CONSTRAINT "Pairs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Days_day_key" ON "Days"("day");

-- AddForeignKey
ALTER TABLE "GroupActivityDays" ADD CONSTRAINT "GroupActivityDays_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupActivityDays" ADD CONSTRAINT "GroupActivityDays_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subgroup" ADD CONSTRAINT "Subgroup_gadId_fkey" FOREIGN KEY ("gadId") REFERENCES "GroupActivityDays"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pairs" ADD CONSTRAINT "Pairs_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pairs" ADD CONSTRAINT "Pairs_subgroupId_fkey" FOREIGN KEY ("subgroupId") REFERENCES "Subgroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
