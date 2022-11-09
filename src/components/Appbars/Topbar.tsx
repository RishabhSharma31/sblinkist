import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiBarChart2, FiSearch } from "react-icons/fi";
import { Section } from "../Layouts/Layout";
import Link from "next/link";
import {BsBarChart} from "react-icons/bs";
import { handleThemeChange } from "../../utils/utils";

const Topbar = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("bg-gray-900");
      handleThemeChange(true);
      setDark(true);
    } else {
      document.body.classList.add("bg-blue-50");
    }
  }, []);
  const toggleLight = () => {
    setDark((p) => (handleThemeChange(!p), !p));
  };

  return (
    <div className="fixed top-0 w-full z-10 bg-white dark:bg-gray-800 dark:text-white">
      <Section cls="h-16 flex justify-between items-center">
        <div className="flex gap-x-5 items-center">
          <Link href={"/"}>
            <Image src={"/images/logo.svg"} width={120} height={60} />
          </Link>
          <span>
            <FiSearch />
          </span>
          <button className="hidden md:flex items-center gap-x-2">
            <span>Explore</span>
            <IoIosArrowDown size={12} />
          </button>

          <button className="hidden md:block">My Library</button>
        </div>

        <div className="hidden md:flex gap-x-5 items-center">
          <button className="bg-[#2CE080] rounded-sm px-4 py-2">
            + Add a book
          </button>
          <div className="flex items-center gap-x-2">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-[#2ce080] text-white">
              A
            </div>
            <IoIosArrowDown />
          </div>
        </div>
        <button className="md:hidden">
          <FiBarChart2 size={24} />
        </button>
      </Section>
    </div>
  );
};

export default Topbar;

{
  /* <span
  onClick={() => toggleLight()}
  className="cursor-pointer text-2xl p-2"
>
  {dark ? <span>&#9728;</span> : <span>☪</span>}
</span> */
}
