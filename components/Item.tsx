import React from "react";
import { Product } from "@/lib/types";
import Link from "next/link";

const Item = ({ item }: { item: Product }) => {
  return (
    <Link href={`/products/${item.category}-${item.title}-${item.id}`}
      className="w-full cont-img flex flex-col items-center border border-transparent gap-2 tranistion duration-300 ease-in-out hover:border-[#1c4DAA] p-2"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <img
        src={`/${item.icon}`}
        alt={item.title}
        className="w-[261px] img-hover-effect object-cover object-center h-[257px] tranistion duration-300 ease-in-out"
      />
      <div className="flex flex-col items-center gap-2 py-4 px-8">
        <p className="w-full flex text-center text-sm font-semibold">
          {item.title}
        </p>
        <span className="text-red-600 line-through text-sm font-semibold">
          {item.discount}$
        </span>
        <span className="text-[#1c4DAA] text-sm font-semibold">
          {item.price}$
        </span>
        <button className="w-full flex items-center justify-center font-semibold text-[#1c4DAA] text-center max-w-[120px] text-sm outline-none border border-[#1c4DAA] rounded p-1 transition duration-500 ease-in-out hover:bg-[#1c4DAA] hover:text-white">
          Buy it now
        </button>
      </div>
    </Link>
  );
};

export default Item;
