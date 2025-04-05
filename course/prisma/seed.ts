// // // import { Day, PrismaClient, UserSex } from "@prisma/client";
// // // const prisma = new PrismaClient();

// // // async function main() {
// // //   // ADMIN
// // //   await prisma.admin.create({
// // //     data: {
// // //       id: "admin1",
// // //       username: "admin1",
// // //     },
// // //   });
// // //   await prisma.admin.create({
// // //     data: {
// // //       id: "admin2",
// // //       username: "admin2",
// // //     },
// // //   });

// // //   // GRADE
// // //   for (let i = 1; i <= 6; i++) {
// // //     await prisma.grade.create({
// // //       data: {
// // //         level: i,
// // //       },
// // //     });
// // //   }

// // //   // CLASS
// // //   for (let i = 1; i <= 6; i++) {
// // //     await prisma.class.create({
// // //       data: {
// // //         name: `${i}A`,
// // //         gradeId: i,
// // //         capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
// // //       },
// // //     });
// // //   }

// // //   // SUBJECT
// // //   const subjectData = [
// // //     { name: "Mathematics" },
// // //     { name: "Science" },
// // //     { name: "English" },
// // //     { name: "History" },
// // //     { name: "Geography" },
// // //     { name: "Physics" },
// // //     { name: "Chemistry" },
// // //     { name: "Biology" },
// // //     { name: "Computer Science" },
// // //     { name: "Art" },
// // //   ];

// // //   for (const subject of subjectData) {
// // //     await prisma.subject.create({ data: subject });
// // //   }

// // //   // TEACHER
// // //   for (let i = 1; i <= 15; i++) {
// // //     await prisma.teacher.create({
// // //       data: {
// // //         id: `teacher${i}`, // Unique ID for the teacher
// // //         username: `teacher${i}`,
// // //         name: `TName${i}`,
// // //         surname: `TSurname${i}`,
// // //         email: `teacher${i}@example.com`,
// // //         phone: `123-456-789${i}`,
// // //         address: `Address${i}`,
// // //         img: `https://example.com/teachers/${i + 1}.jpg`,
// // //         bloodType: "A+",
// // //         sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
// // //         subjects: { connect: [{ id: (i % 10) + 1 }] },
// // //         classes: { connect: [{ id: (i % 6) + 1 }] },
// // //         birthday: new Date(
// // //           new Date().setFullYear(new Date().getFullYear() - 30)
// // //         ),
// // //       },
// // //     });
// // //   }

// // //   // LESSON
// // //   for (let i = 1; i <= 30; i++) {
// // //     await prisma.lesson.create({
// // //       data: {
// // //         name: `Lesson${i}`,
// // //         day: Day[
// // //           Object.keys(Day)[
// // //             Math.floor(Math.random() * Object.keys(Day).length)
// // //           ] as keyof typeof Day
// // //         ],
// // //         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
// // //         endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
// // //         subjectId: (i % 10) + 1,
// // //         classId: (i % 6) + 1,
// // //         teacherId: `teacher${(i % 15) + 1}`,
// // //       },
// // //     });
// // //   }

// // //   // STUDENT
// // //   for (let i = 1; i <= 50; i++) {
// // //     await prisma.student.create({
// // //       data: {
// // //         id: `student${i}`,
// // //         username: `student${i}`,
// // //         name: `SName${i}`,
// // //         surname: `SSurname ${i}`,
// // //         email: `student${i}@example.com`,
// // //         phone: `987-654-321${i}`,
// // //         address: `Address${i}`,
// // //         img: `https://example.com/students/${i + 1}.jpg`,
// // //         bloodType: "O-",
// // //         sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,

// // //         gradeId: (i % 6) + 1,
// // //         classId: (i % 6) + 1,
// // //         birthday: new Date(
// // //           new Date().setFullYear(new Date().getFullYear() - 10)
// // //         ),
// // //       },
// // //     });
// // //   }

// // //   // EXAM
// // //   for (let i = 1; i <= 10; i++) {
// // //     await prisma.exam.create({
// // //       data: {
// // //         title: `Exam ${i}`,
// // //         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
// // //         endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
// // //         lessonId: (i % 30) + 1,
// // //       },
// // //     });
// // //   }

// // //   // ASSIGNMENT
// // //   for (let i = 1; i <= 10; i++) {
// // //     await prisma.assignment.create({
// // //       data: {
// // //         title: `Assignment ${i}`,
// // //         startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
// // //         dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
// // //         lessonId: (i % 30) + 1,
// // //       },
// // //     });
// // //   }

// // //   // RESULT
// // //   for (let i = 1; i <= 10; i++) {
// // //     await prisma.result.create({
// // //       data: {
// // //         score: 90,
// // //         studentId: `student${i}`,
// // //         ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
// // //       },
// // //     });
// // //   }

// // //   // ATTENDANCE
// // //   for (let i = 1; i <= 10; i++) {
// // //     await prisma.attendance.create({
// // //       data: {
// // //         date: new Date(),
// // //         present: true,
// // //         studentId: `student${i}`,
// // //         lessonId: (i % 30) + 1,
// // //       },
// // //     });
// // //   }

// // //   // EVENT
// // //   for (let i = 1; i <= 5; i++) {
// // //     await prisma.event.create({
// // //       data: {
// // //         title: `Event ${i}`,
// // //         description: `Description for Event ${i}`,
// // //         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
// // //         endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
// // //         classId: (i % 5) + 1,
// // //       },
// // //     });
// // //   }

// // //   // ANNOUNCEMENT
// // //   for (let i = 1; i <= 5; i++) {
// // //     await prisma.announcement.create({
// // //       data: {
// // //         title: `Announcement ${i}`,
// // //         description: `Description for Announcement ${i}`,
// // //         date: new Date(),
// // //         classId: (i % 5) + 1,
// // //       },
// // //     });
// // //   }

// // //   console.log("Seeding completed successfully.");
// // // }

// // // main()
// // //   .then(async () => {
// // //     await prisma.$disconnect();
// // //   })
// // //   .catch(async (e) => {
// // //     console.error(e);
// // //     await prisma.$disconnect();
// // //     process.exit(1);
// // //   });

// // import { PrismaClient, UserSex } from "@prisma/client";

// // const prisma = new PrismaClient();

// // async function main() {
// //   // ADMIN
// //   await prisma.admin.create({
// //     data: {
// //       id: "admin-1",
// //       username: "admin1",
// //     },
// //   });
// //   await prisma.admin.create({
// //     data: {
// //       id: "admin-2",
// //       username: "admin2",
// //     },
// //   });

// //   //  GRADES
// //   for (let i = 1; i <= 3; i++) {
// //     await prisma.grade.create({
// //       data: {
// //         level: i,
// //       },
// //     });
// //   }

// //   //TEACHER
// //   for (let i = 1; i <= 15; i++) {
// //     await prisma.teacher.create({
// //       data: {
// //         id: `teacher-${i}`,
// //         username: `teacher${i}`,
// //         name: `Teacher${i}`,
// //         surname: `Surname${i}`,
// //         email: `teacher${i}@example.com`,
// //         phone: `12345678${i}`,
// //         address: `Teacher Address ${i}`,
// //         img: `teacher${i}.png`,
// //         bloodType: "O+",
// //         sex: i % 2 === 0 ? "MALE" : "FEMALE",
// //       },
// //     });
// //   }

// //   // SUBJECTS
// //   const subjectNames = ["Mathematics", "Science", "History"];
// //   for (let i = 0; i < subjectNames.length; i++) {
// //     await prisma.subject.create({
// //       data: {
// //         name: subjectNames[i],
// //       },
// //     });
// //   }

// //   // CLASSES
// //   const classes = [];
// //   for (let i = 1; i <= 3; i++) {
// //     const classData = await prisma.class.create({
// //       data: {
// //         name: `Class ${String.fromCharCode(64 + i)}`,
// //         capacity: 25 + i * 5,
// //         grade: { connect: { level: i } },
// //         supervisor: { connect: { id: `teacher-${i}` } },
// //       },
// //     });
// //     classes.push(classData);
// //   }

// //   // LESSON

// //   const lessons = [];
// //   for (let i = 1; i <= 3; i++) {
// //     const startTime = new Date(`2023-10-24T0${i + 7}:00:00Z`);
// //     const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

// //     const lesson = await prisma.lesson.create({
// //       data: {
// //         name: `Lesson ${i}`,
// //         day: i % 2 === 0 ? "MONDAY" : "WEDNESDAY",
// //         startTime: startTime,
// //         endTime: endTime,
// //         subject: { connect: { name: subjectNames[i - 1] } },
// //         class: { connect: { id: classes[i - 1].id } },
// //         teacher: { connect: { id: `teacher-${i}` } },
// //       },
// //     });

// //     lessons.push(lesson);
// //   }

// //   //  EXAMS
// //   const exams = [];
// //   for (let i = 1; i <= 3; i++) {
// //     const exam = await prisma.exam.create({
// //       data: {
// //         title: `Exam ${i}`,
// //         startTime: new Date(`2023-11-10T10:00:00Z`),
// //         endTime: new Date(`2023-11-10T12:00:00Z`),
// //         // lesson: { connect: { id: lessons[i - 1].id } },
// //         lesson: { connect: { id: lessons[i % lessons.length].id } },
// //       },
// //     });
// //     exams.push(exam);
// //   }

// //   // ASSIGNMENTS
// //   for (let i = 1; i <= 3; i++) {
// //     await prisma.assignment.create({
// //       data: {
// //         title: `Assignment ${i}`,
// //         startDate: new Date(`2023-10-2${i}`),
// //         dueDate: new Date(`2023-10-2${i + 3}`),
// //         // lesson: { connect: { id: lessons[i - 1].id } },
// //         lesson: { connect: { id: lessons[i % lessons.length].id } },
// //       },
// //     });
// //   }

// //   // STUDENTS
// //   const students = [];
// //   for (let i = 1; i <= 15; i++) {
// //     const student = await prisma.student.create({
// //       data: {
// //         id: `student-${i}`,
// //         username: `student${i}`,
// //         name: `Student ${i}`,
// //         surname: `Surname${i}`,
// //         email: `student${i}@example.com`,
// //         phone: `123-456-789${i}`,
// //         address: `Address ${i}`,
// //         img: `https://example.com/student${i}.jpg`,
// //         bloodType: "O+",
// //         sex: "MALE",
// //         class: { connect: { id: classes[0].id } },
// //         grade: { connect: { level: 1 } },
// //         birthday: new Date("2005-06-15"),
// //       },
// //     });
// //     students.push(student);
// //   }

// //   //  RESULTS
// //   for (let i = 1; i <= 3; i++) {
// //     await prisma.result.create({
// //       data: {
// //         score: 80 + i * 5,
// //         student: { connect: { id: students[i - 1].id } },
// //         exam: { connect: { id: exams[i - 1].id } },
// //       },
// //     });
// //   }

// //   // ATTENDANCE
// //   for (let i = 1; i <= 3; i++) {
// //     await prisma.attendance.create({
// //       data: {
// //         date: new Date("2023-10-23"),
// //         present: i % 2 === 0,
// //         student: { connect: { id: students[i - 1].id } },
// //         // lesson: { connect: { id: lessons[i - 1].id } },
// //         lesson: { connect: { id: lessons[i % lessons.length].id } },
// //       },
// //     });
// //   }

// //   // EVENTS
// //   await prisma.event.create({
// //     data: {
// //       title: "Parent-Teacher Meeting",
// //       description: "Quarterly meeting with parents",
// //       startTime: new Date("2023-11-15T14:00:00Z"),
// //       endTime: new Date("2023-11-15T16:00:00Z"),
// //       class: { connect: { id: classes[0].id } },
// //     },
// //   });

// //   //  ANNOUCEMENTS
// //   await prisma.announcement.create({
// //     data: {
// //       title: "School Holiday",
// //       description: "School will be closed next Monday",
// //       date: new Date("2023-10-25"),
// //       class: { connect: { id: classes[0].id } },
// //     },
// //   });

// //   console.log("Seeding completed successfully!");
// // }

// // main()
// //   .then(async () => {
// //     await prisma.$disconnect();
// //   })
// //   .catch(async (e) => {
// //     console.error(e);
// //     await prisma.$disconnect();
// //     process.exit(1);
// //   });

// ........................................................................

// import { PrismaClient, UserSex, Day } from "@prisma/client";
// import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// async function main() {
//   await cleanup();

//   //  ADMINS
//   await prisma.admin.createMany({
//     data: [
//       { id: "admin-1", username: "admin1" },
//       { id: "admin-2", username: "admin2" },
//     ],
//   });

//   // GRADES
//   const grades = await Promise.all(
//     Array.from({ length: 3 }).map((_, i) =>
//       prisma.grade.create({
//         data: {
//           id: i + 1,
//           level: i + 1,
//         },
//       })
//     )
//   );

//   // TEACHERS
//   const teachers = await Promise.all(
//     Array.from({ length: 20 }).map((_, i) =>
//       prisma.teacher.create({
//         data: {
//           id: `${i + 11}`,
//           username: faker.internet.userName(),
//           name: faker.person.firstName(),
//           surname: faker.person.lastName(),
//           email: faker.internet.email(),
//           phone: faker.phone.number(),
//           address: faker.location.streetAddress(),
//           img: faker.image.avatar(),
//           bloodType: faker.helpers.arrayElement(["A+", "B+", "O+", "AB+"]),
//           sex: faker.helpers.arrayElement([UserSex.MALE, UserSex.FEMALE]),
//           createdAt: faker.date.past(),
//           birthday: faker.date.birthdate({ min: 30, max: 60, mode: "age" }),

//           // subjects: {
//           //   connect: faker.helpers
//           //     .arrayElements(subjects, 2)
//           //     .map((s) => ({ id: s.id })),
//           // },
//         },
//       })
//     )
//   );

//   // SUBJECTS
//   const subjectNames = [
//     "Mathematics",
//     "Science",
//     "History",
//     "English",
//     "Geography",
//     "Physics",
//     "Chemistry",
//     "Biology",
//     "Computer Science",
//     "Art",
//   ];
//   const subjects = await Promise.all(
//     subjectNames.map((name) =>
//       prisma.subject.create({
//         data: { name },
//       })
//     )
//   );

//   //  CLASSES
//   const classes = await Promise.all(
//     Array.from({ length: 10 }).map((_, i) =>
//       prisma.class.create({
//         data: {
//           name: `Class ${String.fromCharCode(65 + i)}`,
//           capacity: faker.number.int({ min: 20, max: 40 }),
//           gradeId: faker.helpers.arrayElement(grades).id,
//           supervisorId: faker.helpers.arrayElement(teachers).id,
//         },
//       })
//     )
//   );

//   //STUDENTS
//   const students = await Promise.all(
//     Array.from({ length: 50 }).map((_, i) =>
//       prisma.student.create({
//         data: {
//           id: `${i + 11}`,

//           username: faker.internet.userName(),
//           name: faker.person.firstName(),
//           surname: faker.person.lastName(),
//           email: faker.internet.email(),
//           phone: faker.phone.number(),
//           address: faker.location.streetAddress(),
//           img: faker.image.avatar(),
//           bloodType: faker.helpers.arrayElement(["A+", "B+", "O+", "AB+"]),
//           sex: faker.helpers.arrayElement([UserSex.MALE, UserSex.FEMALE]),
//           createdAt: faker.date.past(),
//           birthday: faker.date.birthdate({ min: 10, max: 18, mode: "age" }),
//           gradeId: faker.helpers.arrayElement(grades).id,
//           classId: faker.helpers.arrayElement(classes).id,
//         },
//       })
//     )
//   );

//   //LESSONS
//   const lessons = await Promise.all(
//     Array.from({ length: 30 }).map((_, i) =>
//       prisma.lesson.create({
//         data: {
//           name: `Lesson ${i + 1}: ${faker.word.words(2)}`,
//           day: faker.helpers.arrayElement(Object.values(Day)),
//           startTime: faker.date.between({
//             from: "2024-01-01T08:00:00Z",
//             to: "2024-01-01T12:00:00Z",
//           }),
//           endTime: faker.date.between({
//             from: "2024-01-01T13:00:00Z",
//             to: "2024-01-01T17:00:00Z",
//           }),
//           subjectId: faker.helpers.arrayElement(subjects).id,
//           classId: faker.helpers.arrayElement(classes).id,
//           teacherId: faker.helpers.arrayElement(teachers).id,
//         },
//       })
//     )
//   );

//   //EXAMS
//   const exams = await Promise.all(
//     Array.from({ length: 50 }).map((_, i) =>
//       prisma.exam.create({
//         data: {
//           title: `Exam ${i + 1}: ${faker.word.words(3)}`,
//           startTime: faker.date.future(),
//           endTime: faker.date.future(),
//           lessonId: faker.helpers.arrayElement(lessons).id,
//         },
//       })
//     )
//   );

//   // ASSIGNMENTS
//   await Promise.all(
//     Array.from({ length: 50 }).map((_, i) =>
//       prisma.assignment.create({
//         data: {
//           title: `Assignment ${i + 1}: ${faker.word.words(2)}`,
//           startDate: faker.date.past(),
//           dueDate: faker.date.future(),
//           lessonId: faker.helpers.arrayElement(lessons).id,
//         },
//       })
//     )
//   );

//   //RESULTS
//   await Promise.all(
//     Array.from({ length: 200 }).map(() =>
//       prisma.result.create({
//         data: {
//           score: faker.number.int({ min: 40, max: 100 }),
//           studentId: faker.helpers.arrayElement(students).id,
//           examId: faker.helpers.arrayElement(exams).id,
//         },
//       })
//     )
//   );

//   // ATTENDANCE
//   await Promise.all(
//     Array.from({ length: 500 }).map(() =>
//       prisma.attendance.create({
//         data: {
//           date: faker.date.past(),
//           present: faker.datatype.boolean(),
//           studentId: faker.helpers.arrayElement(students).id,
//           lessonId: faker.helpers.arrayElement(lessons).id,
//         },
//       })
//     )
//   );

//   //ANNOUNCEMENTS
//   await Promise.all(
//     Array.from({ length: 500 }).map(() =>
//       prisma.announcement.create({
//         data: {
//           date: faker.date.past(),
//           title: "School Holiday",
//           description: "School will be closed next Monday",
//           class: { connect: { id: classes[0].id } },
//         },
//       })
//     )
//   );

//   //EVENTS
//   await Promise.all(
//     Array.from({ length: 20 }).map((_, i) =>
//       prisma.event.create({
//         data: {
//           title: `Event ${i + 1}: ${faker.word.words(3)}`,
//           description: faker.lorem.paragraph(),
//           startTime: faker.date.future(),
//           endTime: faker.date.future(),
//           classId: faker.helpers.arrayElement(classes).id,
//         },
//       })
//     )
//   );
// }

// async function cleanup() {
//   const tablenames = await prisma.$queryRaw<
//     Array<{ tablename: string }>
//   >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

//   for (const { tablename } of tablenames) {
//     if (tablename !== "_prisma_migrations") {
//       try {
//         await prisma.$executeRawUnsafe(
//           `TRUNCATE TABLE "public"."${tablename}" CASCADE;`
//         );
//       } catch (error) {
//         console.log({ error });
//       }
//     }
//   }
// }

// main()
//   .then(() => prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// ........................................................................

import { PrismaClient, UserSex, Day } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await cleanup();

  // ADMINS
  await prisma.admin.createMany({
    data: [
      { id: "admin-1", username: "admin1" },
      { id: "admin-2", username: "admin2" },
    ],
  });

  // GRADES
  const grades = await Promise.all(
    Array.from({ length: 3 }).map((_, i) =>
      prisma.grade.create({
        data: {
          id: i + 1,
          level: i + 1,
        },
      })
    )
  );

  // SUBJECTS
  const subjectNames = [
    "Mathematics",
    "Science",
    "History",
    "English",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Art",
  ];
  const subjects = await Promise.all(
    subjectNames.map((name) =>
      prisma.subject.create({
        data: { name },
      })
    )
  );

  // TEACHERS
  const teachers = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.teacher.create({
        data: {
          id: `${i + 1}`,
          username: faker.internet.userName(),
          name: faker.person.firstName(),
          surname: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          address: faker.location.streetAddress(),
          img: faker.image.avatar(),
          bloodType: faker.helpers.arrayElement(["A+", "B+", "O+", "AB+"]),
          sex: faker.helpers.arrayElement([UserSex.MALE, UserSex.FEMALE]),
          createdAt: faker.date.past(),
          birthday: faker.date.birthdate({ min: 30, max: 60, mode: "age" }),
          subjects: {
            connect: [
              { id: subjects[i % 5].id },
              { id: subjects[(i + 2) % 10].id },
            ],
          },
        },
        include: { subjects: true },
      })
    )
  );

  // CLASSES
  const classes = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.class.create({
        data: {
          name: `Class ${String.fromCharCode(65 + i)}`,
          capacity: faker.number.int({ min: 20, max: 40 }),
          gradeId: faker.helpers.arrayElement(grades).id,
          supervisorId: faker.helpers.arrayElement(teachers).id,
        },
      })
    )
  );

  // STUDENTS
  const students = await Promise.all(
    Array.from({ length: 50 }).map((_, i) =>
      prisma.student.create({
        data: {
          id: `${i + 1}`,
          username: faker.internet.userName(),
          name: faker.person.firstName(),
          surname: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          address: faker.location.streetAddress(),
          img: faker.image.avatar(),
          bloodType: faker.helpers.arrayElement(["A+", "B+", "O+", "AB+"]),
          sex: faker.helpers.arrayElement([UserSex.MALE, UserSex.FEMALE]),
          createdAt: faker.date.past(),
          birthday: faker.date.birthdate({ min: 10, max: 18, mode: "age" }),
          gradeId: faker.helpers.arrayElement(grades).id,
          classId: faker.helpers.arrayElement(classes).id,
        },
      })
    )
  );

  // LESSONS
  const lessons = await Promise.all(
    Array.from({ length: 30 }).map((_, i) => {
      const teacher = faker.helpers.arrayElement(teachers);
      const teacherSubjects = teacher.subjects.map((s) => s.id);
      const availableSubjects = subjects.filter((s) =>
        teacherSubjects.includes(s.id)
      );
      const subject = faker.helpers.arrayElement(availableSubjects);

      return prisma.lesson.create({
        data: {
          name: `Lesson ${i + 1}: ${faker.word.words(2)}`,
          day: faker.helpers.arrayElement(Object.values(Day)),
          startTime: faker.date.between({
            from: "2024-01-01T08:00:00Z",
            to: "2024-01-01T12:00:00Z",
          }),
          endTime: faker.date.between({
            from: "2024-01-01T13:00:00Z",
            to: "2024-01-01T17:00:00Z",
          }),
          subjectId: subject.id,
          classId: faker.helpers.arrayElement(classes).id,
          teacherId: teacher.id,
        },
      });
    })
  );

  // EXAMS
  const exams = await Promise.all(
    Array.from({ length: 50 }).map((_, i) =>
      prisma.exam.create({
        data: {
          title: `Exam ${i + 1}: ${faker.word.words(3)}`,
          startTime: faker.date.future(),
          endTime: faker.date.future(),
          lessonId: faker.helpers.arrayElement(lessons).id,
        },
      })
    )
  );

  // ASSIGNMENTS
  await Promise.all(
    Array.from({ length: 50 }).map((_, i) =>
      prisma.assignment.create({
        data: {
          title: `Assignment ${i + 1}: ${faker.word.words(2)}`,
          startDate: faker.date.past(),
          dueDate: faker.date.future(),
          lessonId: faker.helpers.arrayElement(lessons).id,
        },
      })
    )
  );

  // RESULTS
  await Promise.all(
    Array.from({ length: 200 }).map(() =>
      prisma.result.create({
        data: {
          score: faker.number.int({ min: 40, max: 100 }),
          studentId: faker.helpers.arrayElement(students).id,
          examId: faker.helpers.arrayElement(exams).id,
        },
      })
    )
  );

  // ATTENDANCE
  await Promise.all(
    Array.from({ length: 500 }).map(() =>
      prisma.attendance.create({
        data: {
          date: faker.date.past(),
          present: faker.datatype.boolean(),
          studentId: faker.helpers.arrayElement(students).id,
          lessonId: faker.helpers.arrayElement(lessons).id,
        },
      })
    )
  );

  // ANNOUNCEMENTS
  // await Promise.all(
  //   Array.from({ length: 500 }).map((_, i) =>
  //     prisma.announcement.create({
  //       data: {
  //         title: `Announcement ${i + 1}: ${faker.word.words(2)}`,
  //         description: faker.lorem.paragraphs(2),
  //         date: faker.date.recent(),
  //         classId: faker.helpers.arrayElement(classes).id,
  //       },
  //     })
  //   )
  // );

  await Promise.all(
    Array.from({ length: 500 }).map(() =>
      prisma.announcement.create({
        data: {
          date: faker.date.past(),
          title: "School Holiday",
          description: "School will be closed next Monday",
          class: { connect: { id: classes[0].id } },
        },
      })
    )
  );

  await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.event.create({
        data: {
          title: `Event ${i + 1}: ${faker.word.words(3)}`,
          description: faker.lorem.paragraph(),
          startTime: faker.date.future(),
          endTime: faker.date.future(),
          classId: faker.helpers.arrayElement(classes).id,
        },
      })
    )
  );
}
console.log("✅ Database seeded successfully!");

async function cleanup() {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

  for (const { tablename } of tablenames) {
    if (tablename !== "_prisma_migrations") {
      try {
        await prisma.$executeRawUnsafe(
          `TRUNCATE TABLE "public"."${tablename}" CASCADE;`
        );
      } catch (error) {
        console.log({ error });
      }
    }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
