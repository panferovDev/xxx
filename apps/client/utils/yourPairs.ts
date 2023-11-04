import { prisma } from '@xxx/prism';
import type { YourPairsType } from '@xxx/types/pairDaysType';
import type { StudentType } from '@xxx/types/studentsGroup';

export const yourPairs = async (groupId: number): Promise<YourPairsType[] | null> => {
  const pairDays = await prisma.pairDays.findMany({
    where: {
      dayType: {
        not: 'соло',
      },
    },
  });

  const dayAndGroup = await prisma.groupActivityDays.findMany({
    where: {
      groupId,
    },
    include: {
      subgroup: true,
      day: true,
    },
    orderBy: {
      day: {
        day: 'asc',
      },
    },
  });

  if (!dayAndGroup.length) {
    return null;
  }

  const weeksAndDays: YourPairsType[] = [];

  const result = dayAndGroup.map((day) => {
    const subGroups = day.subgroup[0].subgrups as { id: number; students: StudentType[] }[];
    const daySubgroups = subGroups.map((subgroup) => ({
      id: subgroup.id,
      students: subgroup.students.map((student) => {
        const [name, surname] = student.name.split(' ');
        return {
          ...student,
          name: `${name} ${surname[0].padEnd(surname.length, '*')}`,
        };
      }),
    }));
    return {
      ...day,
      subgroup: daySubgroups,
      day: new Date(day.day.day).toLocaleDateString('ru-Ru', { weekday: 'long' }),
    };
  });

  for (let i = 0; i < pairDays.length; i += 1) {
    weeksAndDays.push({
      week: `Неделя ${i + 1}`,
      days: result.splice(0, pairDays.length),
    });
  }
  return weeksAndDays;
};
