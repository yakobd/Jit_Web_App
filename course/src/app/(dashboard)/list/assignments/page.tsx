import TableSearch from "@/src/components/TableSearch";
import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import { ImFilter } from "react-icons/im";
import { FaSortAmountDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { assignmentsData, examsData, lessonsData, role } from "@/src/lib/data";
import FormModal from "@/src/components/FormModal";
import { Assignment, Class, Prisma, Subject, Teacher } from "@prisma/client";
import prisma from "@/src/lib/prisma";
import { ITEM_PER_PAGE } from "@/src/lib/settings";

type AssignmentList = Assignment & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: AssignmentList) => (
  <tr
    key={item.id}
    className="border-b border-[#083765] even:bg-slate-100 text-sm hover:bg-gray-200"
  >
    <td className="flex items-center gap-4 p-4">{item.lesson.subject.name} </td>
    <td>{item.lesson.class.name}</td>
    <td className="hidden md:table-cell">
      {item.lesson.teacher.name + " " + item.lesson.teacher.surname}
    </td>
    <td className="hidden md:table-cell">
      {new Intl.DateTimeFormat("en-US").format(item.dueDate)}
    </td>

    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="assignment" type="update" data={item} />
            <FormModal table="assignment" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const AssignmentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITIONS

  const query: Prisma.AssignmentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lesson = { classId: parseInt(value) };
            break;
          case "teacherId":
            query.lesson = { teacherId: value };
            break;
          case "search":
            query.lesson = {
              subject: {
                name: { contains: value, mode: "insensitive" },
              },
            };
            break;
          default:
            break;
        }
      }
    }
  }
  const [data, count] = await prisma.$transaction([
    prisma.assignment.findMany({
      where: query,
      include: {
        lesson: {
          select: {
            subject: { select: { name: true } },
            teacher: { select: { name: true, surname: true } },
            class: { select: { name: true } },
          },
        },
      },

      take: ITEM_PER_PAGE,
      skip: 10 * (p - 1),
    }),
    prisma.assignment.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP SECTION  */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-lg font-bold text-[#083765]">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFB15]">
              <ImFilter className="text-[#083765] font-bold text-[16px]" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFB15]">
              <FaSortAmountDown className="text-[#083765] font-bold text-[16px]" />
            </button>
            {role === "admin" && <FormModal table="assignment" type="create" />}
          </div>
        </div>
      </div>

      {/* LIST SECTION  */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* PAGINATION SECTION  */}

      <Pagination page={p} count={count} />
    </div>
  );
};

export default AssignmentListPage;
