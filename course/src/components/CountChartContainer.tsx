import prisma from "../lib/prisma";
import CountChart from "./CountChart";
import { IoIosMore } from "react-icons/io";

const CountChartContainer = async () => {
  const data = await prisma.student.groupBy({
    by: ["sex"],
    _count: true,
  });

  const boys = data.find((d) => d.sex === "MALE")?._count || 0;
  const girls = data.find((d) => d.sex === "FEMALE")?._count || 0;

  return (
    <div className="bg-gray-300 rounded-xl w-full h-full p-4">
      {/* TITLE  */}
      <div className="flex justify-between">
        <h1 className="text-[#083765] font-bold text-lg">Students</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>

      {/* CHART   */}

      <CountChart boys={boys} girls={girls} />

      {/* BOTTOM   */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#083765] rounded-full" />
          <h1 className="font-bold">{boys}</h1>
          <h2 className="text-xs ">
            Boys ({Math.round((boys / (boys + girls)) * 100)}%)
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#FFFB15] rounded-full" />
          <h1 className="font-bold">{girls}</h1>
          <h2 className="text-xs ">
            Girls ({Math.round((girls / (boys + girls)) * 100)}%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
