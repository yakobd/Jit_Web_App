import { IoIosMore } from "react-icons/io";

const EventCalendarContainer = async () => {
  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold my-4 text-[#083765]">Events</h1>
        <IoIosMore className="text-[#083765] text-[25px] font-bold" />
      </div>
      <div className="flex flex-col gap-4 "> </div>
    </div>
  );
};

export default EventCalendarContainer;
