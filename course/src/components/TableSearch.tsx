"use client";

import { E } from "@faker-js/faker/dist/airline-CBNP41sR";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const TableSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-[#083765] px-2"
    >
      <FaSearch className="text-[#083765] font-bold text-[14px]" />
      <input
        type="text"
        placeholder="Search from table"
        className="w-[200px] p-2 bg-transparent outline-none text-[14px]"
      />
    </form>
  );
};

export default TableSearch;
