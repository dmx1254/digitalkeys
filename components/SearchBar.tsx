"use client";

import React, { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import navBarStore from "@/lib/manage";

const SearchBar = () => {
  const { isShowSearchBar } = navBarStore();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isShowSearchBar]);
  return (
    <div
      style={{
        transform: !isShowSearchBar ? "translateY(-41px)" : "translateY(0px)",
      }}
      className="w-full z-10 flex items-center justify-center gap-2 bg-[#1c4DAA] px-4 py-0.5 transition duration-300 ease-in-out"
    >
      <div>
        <select
          name=""
          id=""
          className="bg-transparent text-white outline-none bg-[#0a2d6d] text-sm p-2 gap-2"
        >
          <option value="">All collections</option>
          <option value="operating-system" className="uppercase">
            Operating System
          </option>
          <option value="microsoft-office" className="uppercase">
            Microsoft Office
          </option>
          <option value="antivirus-security" className="uppercase">
            {" "}
            Antivirus & Security
          </option>
          <option value="subscriptions" className="uppercase">
            Subscriptions
          </option>
        </select>
      </div>
      <div className="w-full max-w-3xl relative">
        <input
          type="text"
          ref={inputRef}
          className="w-full text-sm p-2 rounded placeholder:text-gray-400 outline-none"
          placeholder="Search product"
        />
        <button className="absolute outline-none left-[96%] top-[50%] translate-y-[-50%]">
          <Search className="text-gray-500" size={22} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
