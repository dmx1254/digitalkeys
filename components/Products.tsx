"use client";

import { products } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Item from "./Item";

import { Send, DollarSign, CircleCheck } from "lucide-react";

const Products = () => {
  const [limit, setLimit] = useState<number>(8);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(true);
  const handleLoadMore = () => {
    if (limit <= products.length - 4) {
      setLimit((prevLimit) => prevLimit + 4);
    }
  };
  const handleLoadLess = () => {
    if (limit >= products.length) {
      setLimit((prevLimit) => prevLimit - 4);
    }
  };

  useEffect(() => {
    if (limit <= products.length - 4) {
      setIsLoadMore(true);
    } else {
      setIsLoadMore(false);
    }
  }, [limit, isLoadMore]);

  return (
    <div className="w-full max-w-[1200px] flex flex-col items-center justify-center mx-auto my-8 gap-4 px-4">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">Best Sellers</h2>
        <p className="flex text-center text-sm text-gray-600">
          Our all-time best sellers loved by many customers and our staff
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {products.slice(0, limit).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      {isLoadMore ? (
        <button
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
          className="text-sm uppercase my-4 px-6 py-2 text-center border rounded border-transparent bg-white text-[#1c4DAA] transition duration-200 ease-in-out outline-none hover:border-[#1c4DAA] hover:text-blue-800"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      ) : (
        ""
        
      )}
      <div className="w-full flex max-md:flex-col items-center justify-between gap-6">
        <div className="flex flex-col items-start w-full max-w-[400px] md:max-w-2xl">
          <h2 className="text-4xl text-[#1c4DAA] font-bold">Why Choose Us</h2>
          <p className="text-sm mt-1 w-full">
            <span className="text-[#1c4DAA]">All Digital Keys</span>
            &nbsp;-&nbsp;aims to simplify the software licensing process and
            provide customers of all needs, businesses and individuals a like.,
            a comprehensive collection of software from major manufacturers, In
            our software shop, you can order general PC/MAC software, antivirus
            programs, Microsoft Office and servers with the corresponding
            license at excellent and affordable prices.
          </p>
          <p className="w-full mt-4">
            We also know our products inside out as we are highly experienced
            technicians who can solve any software related issue in a quick
            timely manner simply contact our friendly technical support team
            anytime via chat or email.
          </p>
        </div>
        <div className="w-72 h-64 md:w-96 md:h-80">
          <img
            src="/goodkeys.png"
            alt="good keys"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="w-full flex max-md:flex-col items-center gap-6 my-10">
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center p-4 rounded-full bg-[#1c4DAA]">
            <CircleCheck size={32} className="text-white" />
          </span>
          <span className="text-gray-800 font-bold uppercase">
            RELIABLE SERVICE
          </span>
          <span className="flex w-full text-sm text-center">
            All Goods are checked manually to insure maximal efficacy
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center p-4 rounded-full bg-[#1c4DAA]">
            <DollarSign size={32} className="text-white" />
          </span>
          <span className="text-gray-800 font-bold uppercase">
            CHEAP PRICES
          </span>
          <span className="flex w-full text-sm text-center">
            Our Software keys are substantially cheaper than our competitors
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center p-4 rounded-full bg-[#1c4DAA]">
            <Send size={32} className="text-white" />
          </span>
          <span className="text-gray-800 font-bold uppercase">
            EMAIL DELIVERY
          </span>
          <span className="flex w-full text-sm text-center">
            Receive your software keys within seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
