import { IoIosMore } from "react-icons/io";
import prisma from "../lib/prisma";

const UserCard = async ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "lesson";
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    lesson: prisma.lesson,
  };

  const data = await modelMap[type].count();

  return (
    <div className="rounded-2xl bg-[#083765] text-[#FFFB15] p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[12px] bg-white px-2 font-bold py-1 rounded-full text-[#083765]">
          02/02/2017
        </span>
        <IoIosMore className="text-[#FFFB15] text-[25px] font-bold" />
      </div>
      <h1 className="font-bold text-2xl my-4">{data}</h1>
      <h2 className="text-sm font-semibold">
        {type.charAt(0).toUpperCase() + type.slice(1)}s
      </h2>
    </div>
  );
};

export default UserCard;
