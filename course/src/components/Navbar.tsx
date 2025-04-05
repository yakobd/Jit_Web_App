import { FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR  */}

      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-[#083765] px-2">
        <FaSearch className="text-[#083765] font-bold text-[14px]" />
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] p-2 bg-transparent outline-none text-[14px]"
        />
      </div>

      {/* ICONS AND USER   */}

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white text-[#083765] font-bold rounded full w-7 h-7 flex items-center justify-center cursor-pointer">
          <MdMessage className="text-2xl" />
        </div>

        <div className="bg-white text-[#083765] font-bold rounded full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <IoMdNotifications className="text-2xl" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-[#FFFB15] text-[#083765] rounded-full text-xs">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 text-[#083765] font-bold">
            Yakob Dereje
          </span>
          <span className="text-[10px] text-right">Admin</span>
        </div>

        {/* <div>
          <RxAvatar className="rounded-full text-3xl text-[#083765] font-bold cursor-pointer" />
        </div> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
