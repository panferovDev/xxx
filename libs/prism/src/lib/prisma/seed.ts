import { prisma } from '../prism';

const days = [
  { dayName: 'Пн', dayNumber: 1, dayType: 'пары' },
  { dayName: 'Вт', dayNumber: 2, dayType: 'пары' },
  { dayName: 'Ср', dayNumber: 3, dayType: 'соло' },
  { dayName: 'Чт', dayNumber: 4, dayType: 'соло' },
  { dayName: 'Пт', dayNumber: 5, dayType: 'групповой' },
];

async function seed() {
  try {
      await prisma.pairDays.createMany({
        data: days,
      });
    await prisma.$disconnect();
  }catch (e) {
    console.log(e);
    await prisma.$disconnect();
  }
}

seed();