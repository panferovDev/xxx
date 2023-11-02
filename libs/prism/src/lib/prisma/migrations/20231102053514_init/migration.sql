-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,
    "repeat" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PairDays" (
    "id" SERIAL NOT NULL,
    "dayName" TEXT NOT NULL,
    "dayType" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,

    CONSTRAINT "PairDays_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "Subgroup" (
    "id" SERIAL NOT NULL,
    "gadId" INTEGER NOT NULL,
    "subgrups" JSONB NOT NULL,

    CONSTRAINT "Subgroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_groupId_key" ON "Student"("name", "groupId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Days_day_key" ON "Days"("day");

-- CreateIndex
CREATE UNIQUE INDEX "GroupActivityDays_groupId_dayId_type_key" ON "GroupActivityDays"("groupId", "dayId", "type");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupActivityDays" ADD CONSTRAINT "GroupActivityDays_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupActivityDays" ADD CONSTRAINT "GroupActivityDays_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subgroup" ADD CONSTRAINT "Subgroup_gadId_fkey" FOREIGN KEY ("gadId") REFERENCES "GroupActivityDays"("id") ON DELETE CASCADE ON UPDATE CASCADE;
