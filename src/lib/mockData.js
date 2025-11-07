import { faker } from '@faker-js/faker';

export const createEmployee = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  department: faker.person.jobArea(),
  terminal: `Terminal ${faker.helpers.arrayElement(['A', 'B', 'C'])}`,
  avatar: faker.image.avatar(),
  dateAdded: faker.date.past({ years: 2 }),
});

export const createActivity = () => {
    const status = faker.helpers.arrayElement(['Checked-in', 'Late', 'Unidentified']);
    return {
        id: faker.string.uuid(),
        name: status === 'Unidentified' ? 'Unidentified Scan' : faker.person.fullName(),
        timestamp: faker.date.recent(),
        status: status,
        avatar: status === 'Unidentified' ? `https://img-wrapper.vercel.app/image?url=https://placehold.co/40x40/ef4444/ffffff?text=?` : faker.image.avatar(),
    };
};

export const createLog = () => {
    const inTime = faker.date.recent({ days: 7 });
    const outTime = faker.datatype.boolean(0.8) ? faker.date.between({ from: inTime, to: new Date(inTime.getTime() + 8 * 60 * 60 * 1000) }) : null;
    const status = outTime ? 'Completed' : 'Present';
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        terminal: `Terminal ${faker.helpers.arrayElement(['A', 'B', 'C'])}`,
        inTime,
        outTime,
        status,
        avatar: faker.image.avatar(),
    };
};

export const EMPLOYEES = faker.helpers.multiple(createEmployee, { count: 25 });
export const ACTIVITIES = faker.helpers.multiple(createActivity, { count: 20 });
export const LOGS = faker.helpers.multiple(createLog, { count: 40 });

export const attendanceReportData = {
  totalEmployees: EMPLOYEES.length,
  totalCheckIns: faker.number.int({ min: 450, max: 600 }),
  lateArrivals: faker.number.int({ min: 15, max: 50 }),
  absentees: faker.number.int({ min: 5, max: 20 }),
  dailyTrends: Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    checkIns: faker.number.int({ min: 15, max: 25 }),
    late: faker.number.int({ min: 0, max: 4 }),
  })),
  checkInFrequency: EMPLOYEES.slice(0, 5).map(p => ({
      name: p.name,
      checkIns: faker.number.int({ min: 15, max: 22 })
  })).sort((a, b) => b.checkIns - a.checkIns),
  attendanceOverview: [
      { name: 'Present', value: EMPLOYEES.length - 8 },
      { name: 'Late', value: 5 },
      { name: 'Absent', value: 3 },
  ]
};
