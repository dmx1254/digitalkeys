"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search, ShoppingCart, Menu, ChevronRight } from "lucide-react";
import useStore from "@/lib/manage";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    const handleHeight = () => {
      const scrolling = window.scrollY;
      setScreenHeight(scrolling);
    };
    window.addEventListener("scroll", handleHeight);

    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });
  const { handleShowSearchBar, cart, totalPrice } = useStore();

  // console.log(cart);

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        position: screenHeight > 70 ? "fixed" : "static",
        top: screenHeight > 70 ? 0 : 70,
      }}
      className="w-full flex items-center justify-between md:justify-around h-[80px] z-[999] font-lato bg-white px-4"
    >
      <Sheet>
        <SheetTrigger>
          <span className="hidden max-md:flex outline-none cursor-pointer text-gray-800">
            <Menu size={28} />
          </span>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="w-full flex flex-col items-start my-10">
          <Link href="/" className="self-center -mt-10 mb-6">
            <img
              src="/logo.png"
              alt="logo"
              className="w-48 h-24 object-cover object-center mt-8 self-center"
            />
          </Link>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search product"
                className="w-full text-sm outline-none border border-gray-200 rounded p-2"
              />
              <button className="absolute outline-none left-[90%] top-[50%] translate-y-[-50%]">
                <Search className="text-gray-500" size={22} />
              </button>
            </div>
            <div className="w-full flex flex-col items-start my-4">
              <div className="w-full flex items-center justify-between pt-4 pb-4 border-b border-gray-200">
                <Link href="/collection/operating-system" className="uppercase">
                  Operating system
                </Link>
                <ChevronRight size={14} className="text-gray-500" />
              </div>
              <div className="w-full flex items-center justify-between pt-4 pb-4 border-b border-gray-200">
                <Link href="/collection/microsoft-office" className="uppercase">
                  Microsoft Office
                </Link>
                <ChevronRight size={14} className="text-gray-500" />
              </div>
              <div className="w-full flex items-center justify-between pt-4 pb-4 border-b border-gray-200">
                <Link
                  href="/collection/antivirus-security"
                  className="uppercase"
                >
                  Antivirus & Security
                </Link>
                <ChevronRight size={14} className="text-gray-500" />
              </div>
              <div className="w-full flex items-center justify-between pt-4 pb-4 border-b border-gray-200">
                <Link href="/collection/subscriptions" className="uppercase">
                  Subscriptions
                </Link>
                <ChevronRight size={14} className="text-gray-500" />
              </div>
              <div className="w-full flex items-center justify-between pt-4 pb-4 border-b border-gray-200">
                <Link href="/contact-us" className="uppercase">
                  Contact Us
                </Link>
                <ChevronRight size={14} className="text-gray-500" />
              </div>
            </div>
            
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/">
        <img
          src="/logo.png"
          alt="logo"
          className="w-48 h-24 object-cover object-center mt-8"
        />
      </Link>
      <div className="max-md:hidden flex items-center gap-4 text-sm font-semibold uppercase">
        <Link
          href="/collection/operating-system"
          className="relative link-hover"
        >
          Operating system
        </Link>
        <Link
          href="/collection/microsoft-office"
          className="relative link-hover"
        >
          Microsoft Office
        </Link>
        <Link
          href="/collection/antivirus-security"
          className="relative link-hover"
        >
          Antivirus & Security
        </Link>
        <Link href="/collection/subscriptions" className="relative link-hover">
          Subscriptions
        </Link>
        <Link href="/contact-us" className="relative link-hover">
          Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Search
          size={20}
          onClick={handleShowSearchBar}
          className="cursor-pointer"
        />
        <div className="flex items-center">
          <Link
            href="/cart"
            className="flex items-center justify-center relative border border-gray-200 px-2 py-1"
          >
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="flex items-center justify-center absolute h-5 w-5 rounded-full bg-[#1c4DAA] text-white text-xs top-[-45%] left-[75%]">
                {cart.length}
              </span>
            )}
          </Link>
          {totalPrice > 0 && (
            <span className="flex items-center justify-center  text-sm font-semibold border-t border-r border-b border-gray-200 px-2 py-1">
              {totalPrice.toFixed(2)}$
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
