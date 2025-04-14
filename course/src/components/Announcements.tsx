import { IoLocation } from "react-icons/io5";
import prisma from "../lib/prisma";
import { auth } from "@clerk/nextjs/server";

const Announcements = async () => {
  const { userId, sessionClaims } = await auth();

  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const roleConditions = {
    teacher: { lessons: { some: { teacherId: userId! } } },
    student: { students: { some: { id: userId! } } },
  };

  const data = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: "desc" },
    where: {
      ...(role !== "admin" && {
        OR: [
          { classId: null },
          { class: roleConditions[role as keyof typeof roleConditions] || {} },
        ],
      }),
    },
  });

  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold my-4 text-[#083765]">Announcements</h1>
        <span className="text-[#083765] text-xs">View all</span>
      </div>

      <div className="flex flex-col gap-4 mt-4 ">
        {data[0] && (
          <div className="bg-white p-4 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15]">
            <div className="flex items-center justify-between">
              <h2 className="text-[#083765] text-[17px] font-bold">
                {data[0].title}
              </h2>
              <span className="text-[#083765] text-xs">
                {new Intl.DateTimeFormat("en-GB").format(data[0].date)}
              </span>
            </div>
            <p className="text-[12px] text-[#083765] p-2">
              {data[0].description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <IoLocation className="text-[#083765] text-[14px] font-bold" />
              <p className="text-[#083765] text-[14px] ">ቆሎ በር</p>
            </div>
          </div>
        )}

        {data[1] && (
          <div className="bg-white p-4 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15]">
            <div className="flex items-center justify-between">
              <h2 className="text-[#083765] text-[17px] font-bold">
                {data[1].title}
              </h2>
              <span className="text-[#083765] text-xs">
                {new Intl.DateTimeFormat("en-GB").format(data[1].date)}
              </span>
            </div>
            <p className="text-[12px] text-[#083765] p-2">
              {data[1].description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <IoLocation className="text-[#083765] text-[14px] font-bold" />
              <p className="text-[#083765] text-[14px] ">
                ቅዱስ ገብርኤል ቤተ ክርስቲያን አቅራቢያ
              </p>
            </div>
          </div>
        )}

        {data[2] && (
          <div className="bg-white p-4 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15]">
            <div className="flex items-center justify-between">
              <h2 className="text-[#083765] text-[17px] font-bold">
                {data[2].title}
              </h2>
              <span className="text-[#083765] text-xs">
                {new Intl.DateTimeFormat("en-GB").format(data[2].date)}
              </span>
            </div>
            <p className="text-[12px] text-[#083765] p-2">
              {data[2].description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <IoLocation className="text-[#083765] text-[14px] font-bold" />
              <p className="text-[#083765] text-[14px] ">ቆሎ በር</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
