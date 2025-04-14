import Calendar from "react-calendar";
import { IoIosMore } from "react-icons/io";
import EventList from "./EventList";
import EventCalendar from "./EventCalendar";

const EventCalendarContainer = async ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  const { date } = searchParams;
  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <EventCalendar />
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold my-4 text-[#083765]">Events</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>
      <div className="flex flex-col gap-4 ">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
