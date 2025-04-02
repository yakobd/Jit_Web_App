import TableSearch from "@/src/components/TableSearch";
import Pagination from "@/src/components/Pagination";
import Table from "@/src/components/Table";
import { ImFilter } from "react-icons/im";
import { FaSortAmountDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { role, studentsData } from "@/src/lib/data";
import FormModal from "@/src/components/FormModal";
import { Class, Prisma, Student } from "@prisma/client";
import prisma from "@/src/lib/prisma";
import { ITEM_PER_PAGE } from "@/src/lib/settings";

type StudentList = Student & { class: Class };

const columns = [
  {
    header: "Info",
    accessor: "Info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: StudentList) => (
  <tr
    key={item.id}
    className="border-b border-[#083765] even:bg-slate-100 text-sm hover:bg-gray-200"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={"/noAvatar.png"}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <h3 className="font-semibold text-[#083765]">{item.name}</h3>
        <p className="text-xs text-[#083765]">{item?.class.name}</p>
      </div>
    </td>

    <td className="hidden md:table-cell text-[#083765] text-[13px]">
      {item.username}
    </td>
    <td className="hidden md:table-cell text-[#083765] text-[13px]">
      {item.class.name[0]}
    </td>
    <td className="hidden md:table-cell text-[#083765] text-[13px]">
      {item.phone}
    </td>
    <td className="hidden md:table-cell text-[#083765] text-[13px]">
      {item.address}
    </td>

    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/students/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFFB15]">
            <FaStreetView className="text-[#083765] font-bold text-[16px]" />
          </button>
        </Link>
        {role === "admin" && (
          <FormModal table="student" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const StudentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITIONS

  const query: Prisma.StudentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "teacherId":
            {
              query.class = {
                lessons: {
                  some: {
                    teacherId: value,
                  },
                },
              };
            }
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const [data, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      include: {
        class: true,
      },

      take: ITEM_PER_PAGE,
      skip: 10 * (p - 1),
    }),
    prisma.student.count({ where: query }),
  ]);
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP SECTION  */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-lg font-bold text-[#083765]">
          All Students
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
            {role === "admin" && <FormModal table="student" type="create" />}
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

export default StudentListPage;
