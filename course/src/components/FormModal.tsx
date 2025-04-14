"use client";
import React, { Dispatch, JSX, SetStateAction, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useFormState } from "react-dom";
import { deleteSubject } from "../lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const deleteActionMap = {
  subject: deleteSubject,
  class: deleteSubject,
  teacher: deleteSubject,
  student: deleteSubject,
  lesson: deleteSubject,
  exam: deleteSubject,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject,
};

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const LessonForm = dynamic(() => import("./forms/LessonForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => (
    <h1 className="text-[#FFFB15] text-[15px] text-center font-bold">
      Loading...
    </h1>
  ),
});

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any
  ) => JSX.Element;
} = {
  teacher: (setOpen, type, data) => (
    <TeacherForm type={type} data={data} setOpen={setOpen} />
  ),
  student: (setOpen, type, data) => (
    <StudentForm type={type} data={data} setOpen={setOpen} />
  ),
  subject: (setOpen, type, data) => (
    <SubjectForm type={type} data={data} setOpen={setOpen} />
  ),
  class: (setOpen, type, data) => (
    <ClassForm type={type} data={data} setOpen={setOpen} />
  ),
  lesson: (setOpen, type, data) => (
    <LessonForm type={type} data={data} setOpen={setOpen} />
  ),
  exam: (setOpen, type, data) => (
    <ExamForm type={type} data={data} setOpen={setOpen} />
  ),
  assignment: (setOpen, type, data) => (
    <AssignmentForm type={type} data={data} setOpen={setOpen} />
  ),
  result: (setOpen, type, data) => (
    <ResultForm type={type} data={data} setOpen={setOpen} />
  ),
  attendance: (setOpen, type, data) => (
    <AttendanceForm type={type} data={data} setOpen={setOpen} />
  ),
  event: (setOpen, type, data) => (
    <EventForm type={type} data={data} setOpen={setOpen} />
  ),
  announcement: (setOpen, type, data) => (
    <AnnouncementForm type={type} data={data} setOpen={setOpen} />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | String;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FFFB15]"
      : type === "update"
        ? "bg-[#FFFB15]"
        : "bg-red-400";
  const Icon =
    type === "create" ? FaPlus : type === "update" ? FaEdit : MdDelete;

  const [open, setOpen] = useState(false);

  const Form = () => {
    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false,
      error: false,
    });

    const router = useRouter();

    useEffect(() => {
      if (state.success) {
        toast(`Subject has been deleted!`);
        setOpen(false);
        router.refresh();
      }
    }, [state]);

    return type === "delete" && id ? (
      <form action={formAction} className="flex flex-col p-4 gap-4">
        <input type="text | number" name="id" value={id} hidden />
        <span className="text-[#FFFB15] text-[15px] text-center font-bold">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <div className="flex justify-center gap-4 items-center">
          <button className="bg-red-700 border-none rounded-md text-white w-max font-bold px-4 py-2">
            Delete
          </button>
          <button className="bg-[#FFFB15] border-none rounded-md text-[#083765] font-bold px-4 py-2">
            Cancel
          </button>
        </div>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Icon className={` text-[#083765] font-bold text-[20px] `} />
      </button>
      {open && (
        <div className="flex h-screen justify-center w-screen absolute items-center left-0 top-0 z-50">
          <div className="bg-[#083765] p-4 rounded-md w-[90%] 2xl:w-[40%] lg:w-[60%] md:w-[70%] opacity-96 relative xl:w-[50%]">
            <Form />
            <div
              className="rounded-md absolute cursor-pointer right-4 top-4"
              onClick={() => setOpen(false)}
            >
              <IoIosCloseCircle className="bg-[#083765] text-[#FFFB15] text-[25px] font-bold" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
