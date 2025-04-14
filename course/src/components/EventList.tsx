import { IoLocation } from "react-icons/io5";
import prisma from "../lib/prisma";

const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {
  const date = dateParam ? new Date(dateParam) : new Date();

  const data = await prisma.event.findMany({
    where: {
      startTime: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lte: new Date(date.setHours(23, 59, 59, 999)),
      },
    },
  });

  return data.map((event) => (
    <div
      className="p-5 rounded-md border-b-2 border-b-gray-500 border-t-4 odd:border-t-[#083765] even:border-t-[#fffb15] bg-white"
      key={event.id}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[#083765] text-[17px] font-bold">{event.title}</h1>
        <span className="text-[#083765] text-xs">
          {event.startTime.toLocaleTimeString("en-UK", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </span>
      </div>

      <p className="mt-2 text-[#083765] text-[14px]">{event.description}</p>
      <div className="flex items-center gap-2 mt-2">
        <IoLocation className="text-[#083765] text-[20px] font-bold" />
        {/* <p className="text-[#083765] text-[14px] font-bold">{event.location}</p> */}
      </div>
    </div>
  ));
};

export default EventList;
