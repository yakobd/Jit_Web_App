import prisma from "../lib/prisma";
import AttendanceChart from "./AttendanceChart";
import { IoIosMore } from "react-icons/io";

const AttendanceChartContainer = async () => {
  const today = new Date();
  const dayOfWeek = today.getDate();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const lastMonday = new Date(today);

  lastMonday.setDate(today.getDay() - daysSinceMonday);

  const resData = await prisma.attendance.findMany({
    where: {
      date: {
        gte: lastMonday,
      },
    },
    select: {
      date: true,
      present: true,
    },
  });

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const attendanceMap: { [key: string]: { present: number; absent: number } } =
    {
      Mon: { present: 0, absent: 0 },
      Tue: { present: 0, absent: 0 },
      Wed: { present: 0, absent: 0 },
      Thu: { present: 0, absent: 0 },
      Fri: { present: 0, absent: 0 },
    };

  resData.forEach((item) => {
    const itemDate = new Date(item.date);

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const dayName = daysOfWeek[dayOfWeek - 1];

      if (item.present) {
        attendanceMap[dayName].present += 1;
      } else {
        attendanceMap[dayName].absent += 1;
      }
    }
  });

  const data = daysOfWeek.map((day) => ({
    name: day,
    present: attendanceMap[day].present,
    absent: attendanceMap[day].absent,
  }));
  return (
    <div className="bg-gray-300 rounded-xl w-full h-full p-4">
      {/* TITLE  */}
      <div className="flex justify-between">
        <h1 className="text-[#083765] font-bold text-lg">Attendance</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>
      <AttendanceChart data={data} />
    </div>
  );
};

export default AttendanceChartContainer;
