/*
  Warnings:

  - A unique constraint covering the columns `[name,groupId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_groupId_fkey";

-- DropIndex
DROP INDEX "Student_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_groupId_key" ON "Student"("name", "groupId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
