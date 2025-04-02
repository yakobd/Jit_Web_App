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
import FormModal from "@/src/components/FormModal";

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-1 flex-col p-4 gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        {/* TOP SECTION  */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CARD  */}
          <div className="flex flex-1 bg-[#083765] rounded-md gap-4 px-4 py-6">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="h-36 rounded-full w-36 object-cover"
              />
            </div>

            <div className="flex flex-col justify-between w-2/3 gap-4">
              <div className="flex justify-between gap-4 items-center">
                <h1 className="text-[#FFFB15] text-xl font-bold">
                  Yakob Dereje
                </h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "yakobd",
                    email: "john@doe.com",
                    password: "password",
                    firstName: "Yakob",
                    lastName: "Dereje",
                    phone: "+251 961 00 8600",
                    address: "123 Main St, Anytown, USA",
                    bloodTpe: "A+",
                    dateOfBirth: "2001-03-11",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>
              <p className="text-[#FFFB15] text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-wrap justify-between text-xs font-medium gap-2 items-center">
                <div className="flex w-full 2xl:w-1/3 gap-2 items-center lg:w-full md:w-1/3">
                  <MdBloodtype className="text-[#FFFB15] text-[14px] font-bold" />
                  <span className="text-[#FFFB15]">A+</span>
                </div>
                <div className="flex w-full 2xl:w-1/3 gap-2 items-center lg:w-full md:w-1/3">
                  <MdOutlineDateRange className="text-[#FFFB15] text-[14px] font-bold" />
                  <span className="text-[#FFFB15]">January 2025</span>
                </div>
                <div className="flex w-full 2xl:w-1/3 gap-2 items-center lg:w-full md:w-1/3">
                  <IoMdMail className="text-[#FFFB15] text-[14px] font-bold" />
                  <span className="text-[#FFFB15]">
                    yakobdereje.yd@gmail.com
                  </span>
                </div>
                <div className="flex w-full 2xl:w-1/3 gap-2 items-center lg:w-full md:w-1/3">
                  <FaPhoneAlt className="text-[#FFFB15] text-[14px] font-bold" />
                  <span className="text-[#FFFB15]">+251 961 0086 00</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS  */}
          <div className="flex flex-1 flex-wrap justify-between gap-4">
            {/* CARD  */}
            <div className="flex bg-white p-4 rounded-md w-full 2xl:w-[48%] gap-4 md:w-[48%] xl:w-[45%]">
              <MdCoPresent
                className="text-[#083765] text-[24px] font-bold"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-gray-400 text-sm">Attendance</span>
              </div>
            </div>

            {/* CARD  */}
            <div className="flex bg-white p-4 rounded-md w-full 2xl:w-[48%] gap-4 md:w-[48%] xl:w-[45%]">
              <MdPlayLesson
                className="text-[#083765] text-[24px] font-bold"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-gray-400 text-sm">Attendance</span>
              </div>
            </div>

            {/* CARD  */}
            <div className="flex bg-white p-4 rounded-md w-full 2xl:w-[48%] gap-4 md:w-[48%] xl:w-[45%]">
              <IoMdGitBranch
                className="text-[#083765] text-[24px] font-bold"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-gray-400 text-sm">Attendance</span>
              </div>
            </div>

            {/* CARD  */}
            <div className="flex bg-white p-4 rounded-md w-full 2xl:w-[48%] gap-4 md:w-[48%] xl:w-[45%]">
              <SiGoogleclassroom
                className="text-[#083765] text-[24px] font-bold"
                w-6
                h-6
              />
              <div className="text-[#083765] font-bold">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-gray-400 text-sm">Attendance</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM  */}
        <div className="bg-white h-full p-4 rounded-md mt-4">
          <h1 className="text-[#083765] font-bold">Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="flex flex-col w-full gap-4 xl:w-1/3">
        <div className="bg-gray-200 p-4 rounded-md">
          <h1 className="text-[#083765] text-xl font-bold">Shortcuts</h1>
          <div className="flex flex-wrap text-gray-500 text-xs gap-4 mt-4">
            <Link
              className="bg-[#083765] p-3 rounded-md text-[#FFFB15]"
              href="/"
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="bg-[#083765] p-3 rounded-md text-[#FFFB15]"
              href={`/list/students?teacherId=${11}`}
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="bg-[#083765] p-3 rounded-md text-[#FFFB15]"
              href="/"
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="bg-[#083765] p-3 rounded-md text-[#FFFB15]"
              href="/"
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="bg-[#083765] p-3 rounded-md text-[#FFFB15]"
              href="/"
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
