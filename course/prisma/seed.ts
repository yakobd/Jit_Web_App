// import { Day, PrismaClient, UserSex } from "@prisma/client";
// const prisma = new PrismaClient();

// async function main() {
//   // ADMIN
//   await prisma.admin.create({
//     data: {
//       id: "admin1",
//       username: "admin1",
//     },
//   });
//   await prisma.admin.create({
//     data: {
//       id: "admin2",
//       username: "admin2",
//     },
//   });

//   // GRADE
//   for (let i = 1; i <= 6; i++) {
//     await prisma.grade.create({
//       data: {
//         level: i,
//       },
//     });
//   }

//   // CLASS
//   for (let i = 1; i <= 6; i++) {
//     await prisma.class.create({
//       data: {
//         name: `${i}A`,
//         gradeId: i,
//         capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
//       },
//     });
//   }

//   // SUBJECT
//   const subjectData = [
//     { name: "Mathematics" },
//     { name: "Science" },
//     { name: "English" },
//     { name: "History" },
//     { name: "Geography" },
//     { name: "Physics" },
//     { name: "Chemistry" },
//     { name: "Biology" },
//     { name: "Computer Science" },
//     { name: "Art" },
//   ];

//   for (const subject of subjectData) {
//     await prisma.subject.create({ data: subject });
//   }

//   // TEACHER
//   for (let i = 1; i <= 15; i++) {
//     await prisma.teacher.create({
//       data: {
//         id: `teacher${i}`, // Unique ID for the teacher
//         username: `teacher${i}`,
//         name: `TName${i}`,
//         surname: `TSurname${i}`,
//         email: `teacher${i}@example.com`,
//         phone: `123-456-789${i}`,
//         address: `Address${i}`,
//         img: `https://example.com/teachers/${i + 1}.jpg`,
//         bloodType: "A+",
//         sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
//         subjects: { connect: [{ id: (i % 10) + 1 }] },
//         classes: { connect: [{ id: (i % 6) + 1 }] },
//         birthday: new Date(
//           new Date().setFullYear(new Date().getFullYear() - 30)
//         ),
//       },
//     });
//   }

//   // LESSON
//   for (let i = 1; i <= 30; i++) {
//     await prisma.lesson.create({
//       data: {
//         name: `Lesson${i}`,
//         day: Day[
//           Object.keys(Day)[
//             Math.floor(Math.random() * Object.keys(Day).length)
//           ] as keyof typeof Day
//         ],
//         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//         endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
//         subjectId: (i % 10) + 1,
//         classId: (i % 6) + 1,
//         teacherId: `teacher${(i % 15) + 1}`,
//       },
//     });
//   }

//   // STUDENT
//   for (let i = 1; i <= 50; i++) {
//     await prisma.student.create({
//       data: {
//         id: `student${i}`,
//         username: `student${i}`,
//         name: `SName${i}`,
//         surname: `SSurname ${i}`,
//         email: `student${i}@example.com`,
//         phone: `987-654-321${i}`,
//         address: `Address${i}`,
//         img: `https://example.com/students/${i + 1}.jpg`,
//         bloodType: "O-",
//         sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,

//         gradeId: (i % 6) + 1,
//         classId: (i % 6) + 1,
//         birthday: new Date(
//           new Date().setFullYear(new Date().getFullYear() - 10)
//         ),
//       },
//     });
//   }

//   // EXAM
//   for (let i = 1; i <= 10; i++) {
//     await prisma.exam.create({
//       data: {
//         title: `Exam ${i}`,
//         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//         endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
//         lessonId: (i % 30) + 1,
//       },
//     });
//   }

//   // ASSIGNMENT
//   for (let i = 1; i <= 10; i++) {
//     await prisma.assignment.create({
//       data: {
//         title: `Assignment ${i}`,
//         startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
//         dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
//         lessonId: (i % 30) + 1,
//       },
//     });
//   }

//   // RESULT
//   for (let i = 1; i <= 10; i++) {
//     await prisma.result.create({
//       data: {
//         score: 90,
//         studentId: `student${i}`,
//         ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
//       },
//     });
//   }

//   // ATTENDANCE
//   for (let i = 1; i <= 10; i++) {
//     await prisma.attendance.create({
//       data: {
//         date: new Date(),
//         present: true,
//         studentId: `student${i}`,
//         lessonId: (i % 30) + 1,
//       },
//     });
//   }

//   // EVENT
//   for (let i = 1; i <= 5; i++) {
//     await prisma.event.create({
//       data: {
//         title: `Event ${i}`,
//         description: `Description for Event ${i}`,
//         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//         endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
//         classId: (i % 5) + 1,
//       },
//     });
//   }

//   // ANNOUNCEMENT
//   for (let i = 1; i <= 5; i++) {
//     await prisma.announcement.create({
//       data: {
//         title: `Announcement ${i}`,
//         description: `Description for Announcement ${i}`,
//         date: new Date(),
//         classId: (i % 5) + 1,
//       },
//     });
//   }

//   console.log("Seeding completed successfully.");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import { PrismaClient, UserSex } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin-1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin-2",
      username: "admin2",
    },
  });

  //  GRADES
  for (let i = 1; i <= 3; i++) {
    await prisma.grade.create({
      data: {
        level: i,
      },
    });
  }

  //TEACHER
  for (let i = 1; i <= 2; i++) {
    await prisma.teacher.create({
      data: {
        id: `teacher-${i}`,
        username: `teacher${i}`,
        name: `Teacher${i}`,
        surname: `Surname${i}`,
        email: `teacher${i}@example.com`,
        phone: `12345678${i}`,
        address: `Teacher Address ${i}`,
        img: `teacher${i}.png`,
        bloodType: "O+",
        sex: i % 2 === 0 ? "MALE" : "FEMALE",
      },
    });
  }

  // SUBJECTS
  const subjectNames = ["Mathematics", "Science", "History"];
  for (let i = 0; i < subjectNames.length; i++) {
    await prisma.subject.create({
      data: {
        name: subjectNames[i],
      },
    });
  }

  // CLASSES
  const classes = [];
  for (let i = 1; i <= 2; i++) {
    const classData = await prisma.class.create({
      data: {
        name: `Class ${String.fromCharCode(64 + i)}`,
        capacity: 25 + i * 5,
        grade: { connect: { level: i } },
        supervisor: { connect: { id: `teacher-${i}` } },
      },
    });
    classes.push(classData);
  }

  // LESSON

  const lessons = [];
  for (let i = 1; i <= 2; i++) {
    const startTime = new Date(`2023-10-24T0${i + 7}:00:00Z`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const lesson = await prisma.lesson.create({
      data: {
        name: `Lesson ${i}`,
        day: i % 2 === 0 ? "MONDAY" : "WEDNESDAY",
        startTime: startTime,
        endTime: endTime,
        subject: { connect: { name: subjectNames[i - 1] } },
        class: { connect: { id: classes[i - 1].id } },
        teacher: { connect: { id: `teacher-${i}` } },
      },
    });

    lessons.push(lesson);
  }

  //  EXAMS
  const exams = [];
  for (let i = 1; i <= 2; i++) {
    const exam = await prisma.exam.create({
      data: {
        title: `Exam ${i}`,
        startTime: new Date(`2023-11-10T10:00:00Z`),
        endTime: new Date(`2023-11-10T12:00:00Z`),
        lesson: { connect: { id: lessons[i - 1].id } },
      },
    });
    exams.push(exam);
  }

  // ASSIGNMENTS
  for (let i = 1; i <= 2; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i}`,
        startDate: new Date(`2023-10-2${i}`),
        dueDate: new Date(`2023-10-2${i + 3}`),
        lesson: { connect: { id: lessons[i - 1].id } },
      },
    });
  }

  // STUDENTS
  const students = [];
  for (let i = 1; i <= 2; i++) {
    const student = await prisma.student.create({
      data: {
        id: `student-${i}`,
        username: `student${i}`,
        name: `Student ${i}`,
        surname: `Surname${i}`,
        email: `student${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address ${i}`,
        img: `https://example.com/student${i}.jpg`,
        bloodType: "O+",
        sex: "MALE",
        class: { connect: { id: classes[0].id } },
        grade: { connect: { level: 1 } },
        birthday: new Date("2005-06-15"),
      },
    });
    students.push(student);
  }

  //  RESULTS
  for (let i = 1; i <= 2; i++) {
    await prisma.result.create({
      data: {
        score: 80 + i * 5,
        student: { connect: { id: students[i - 1].id } },
        exam: { connect: { id: exams[i - 1].id } },
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 2; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date("2023-10-23"),
        present: i % 2 === 0,
        student: { connect: { id: students[i - 1].id } },
        lesson: { connect: { id: lessons[i - 1].id } },
      },
    });
  }

  // EVENTS
  await prisma.event.create({
    data: {
      title: "Parent-Teacher Meeting",
      description: "Quarterly meeting with parents",
      startTime: new Date("2023-11-15T14:00:00Z"),
      endTime: new Date("2023-11-15T16:00:00Z"),
      class: { connect: { id: classes[0].id } },
    },
  });

  //  ANNOUCEMENTS
  await prisma.announcement.create({
    data: {
      title: "School Holiday",
      description: "School will be closed next Monday",
      date: new Date("2023-10-25"),
      class: { connect: { id: classes[0].id } },
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
