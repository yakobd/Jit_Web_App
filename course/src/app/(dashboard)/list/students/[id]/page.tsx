import Image from "next/image";
import Link from "next/link";
import { MdBloodtype } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { IoMdGitBranch } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { MdPlayLesson } from "react-icons/md";
import BigCalendar from "@/src/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Announcements from "@/src/components/Announcements";
import Performance from "@/src/components/Performance";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        {/* TOP SECTION  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD  */}
          <div className="bg-[#083765] py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-bold text-[#FFFB15]">
                Yared Berhanu
              </h1>
              <p className="text-sm text-[#FFFB15]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdBloodtype className="text-[#FFFB15] font-bold text-[14px]" />
                  <span className="text-[#FFFB15]">A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdOutlineDateRange className="text-[#FFFB15] font-bold text-[14px]" />
                  <span className="text-[#FFFB15]">January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <IoMdMail className="text-[#FFFB15] font-bold text-[14px]" />
                  <span className="text-[#FFFB15]">
                    yakobdereje.yd@gmail.com
                  </span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FaPhoneAlt className="text-[#FFFB15] font-bold text-[14px]" />
                  <span className="text-[#FFFB15]">+251 961 0086 00</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS  */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <MdCoPresent
                className="text-[#083765] font-bold text-[24px]"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <MdPlayLesson
                className="text-[#083765] font-bold text-[24px]"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">4</h1>
                <span className="text-sm text-gray-400">ኮርስ</span>
              </div>
            </div>

            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <IoMdGitBranch
                className="text-[#083765] font-bold text-[24px]"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">1</h1>
                <span className="text-sm text-gray-400">JIT</span>
              </div>
            </div>

            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <SiGoogleclassroom
                className="text-[#083765] font-bold text-[24px]"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">1 </h1>
                <span className="text-sm text-gray-400">2ኛ ዓመት</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM  */}
        <div className="mt-4 bg-white rounded-md p-4 h-full">
          <h1 className="text-[#083765] font-bold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h1 className="text-[#083765] font-bold text-xl">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-[#083765] text-[#FFFB15]"
              href={`/list/lessons?classId=${2}`}
            >
              Student&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-[#083765] text-[#FFFB15]"
              href={`/list/teachers?classId=${2}`}
            >
              Student&apos;s Teachers
            </Link>
            <Link
              className="p-3 rounded-md bg-[#083765] text-[#FFFB15]"
              href={`/list/exams?classId=${2}`}
            >
              Student&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-[#083765] text-[#FFFB15]"
              href={`/list/assignments?classId=${2}`}
            >
              Teacher&apos;s Assignments
            </Link>
            <Link
              className="p-3 rounded-md bg-[#083765] text-[#FFFB15]"
              href={`/list/results?classId=${2}`}
            >
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
