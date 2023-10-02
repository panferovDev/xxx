/*
  Warnings:

  - You are about to drop the `Pairs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subgrups` to the `Subgroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pairs" DROP CONSTRAINT "Pairs_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Pairs" DROP CONSTRAINT "Pairs_subgroupId_fkey";

-- AlterTable
ALTER TABLE "Subgroup" ADD COLUMN     "subgrups" JSONB NOT NULL;

-- DropTable
DROP TABLE "Pairs";
