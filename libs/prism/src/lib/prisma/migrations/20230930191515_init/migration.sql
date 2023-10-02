/*
  Warnings:

  - A unique constraint covering the columns `[groupId,dayId,type]` on the table `GroupActivityDays` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GroupActivityDays_groupId_dayId_type_key" ON "GroupActivityDays"("groupId", "dayId", "type");
