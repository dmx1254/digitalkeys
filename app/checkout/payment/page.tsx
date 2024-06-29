"use client";

import useStore from "@/lib/manage";
import Link from "next/link";
import React from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

const CheckoutPage = () => {
  const { cart, totalPrice } = useStore();
  return (
    <div className="w-full max-w-5xl flex max-md:flex-col items-start justify-center mx-auto my-16 gap-4 px-4">
        <Link
          href="/cart"
          className="-mt-10 flex md:hidden text-sm bg-[#1C4DAA] text-white p-2 rounded self-end"
        >
          Return to cart
        </Link>
      <div className="w-full max-w-xl flex flex-col gap-4 items-center">
        <div className="w-full flex flex-col items-start gap-4 border border-gray-200 rounded bg-white">
          <div className="w-full flex items-center gap-2 bg-[#FCFCFC] p-2 border-b">
            <MdOutlineRadioButtonChecked size={20} className="text-[#1C4DAA]" />
            <span className="text-blue-600 text-sm">PayPal</span>
          </div>
          <div className="w-full p-4">
            <div className="w-full p-4 border border-gray-200 rounded bg-[#FCFCFC]">
              <img
                src="/paypal.svg"
                alt="paypal payment methods"
                className="w-[200px] mx-auto h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
        <button className="w-full text-center outline-none text-sm p-2.5 bg-[#1C4DAA] text-white border border-transparent rounded transition duration-300 ease-in-out hover:bg-white hover:text-[#1C4DAA] hover:border-[#1C4DAA]">
          Pay
        </button>
      </div>
      <div className="w-full max-w-md flex flex-col gap-4 items-center">
        <Link
          href="/cart"
          className="-mt-10 max-md:hidden text-sm bg-[#1C4DAA] text-white p-2 rounded self-end"
        >
          Return to cart
        </Link>
        <div className="w-full flex flex-col items-start gap-4 border border-gray-200 rounded bg-[#FCFCFC]">
          <div className="w-full p-4">
            <div className="w-full p-4 border border-gray-200 rounded bg-[#FCFCFC]">
              <label htmlFor="coupon-code" className="text-sm">
                Coupon Code
              </label>
              <div className="w-full flex items-center mt-0.5">
                <input
                  type="text"
                  placeholder="coupon Code"
                  className="w-full outline-none text-sm p-[9px] border border-gray-200"
                />
                <button className="text-center outline-none text-sm p-2.5 bg-[#1C4DAA] text-white border-none transition duration-300 ease-in-out  hover:opacity-90 rounded-tr rounded-br">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-4 p-4">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="w-full flex items-center gap-2 pb-4 border-b border-gray-200"
              >
                <div className="relative">
                  <img
                    src={`/${item.icon}`}
                    alt="windows 10"
                    className="w-20 h-16 object-contain object-center"
                  />
                  <span className="flex items-center justify-center absolute h-5 w-5 rounded-full bg-[#1c4DAA] text-white text-xs top-[-8%] left-[75%]">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <p className="flex text-sm ">{item.title}</p>
                  <p className="text-sm font-semibold">{item.price}$</p>
                </div>
              </div>
            ))}

            <div className="w-full flex flex-col items-start gap-4 pb-4 border-b border-gray-200">
              <div className="w-full flex items-center justify-between">
                <span className="text-sm text-gray-500">List price</span>
                <span className="text-sm font-semibold">
                  {totalPrice.toFixed(2)}$
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Shipping (Email / Phone Delivery)
                </span>
                <span className="text-sm font-semibold">0$</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-sm font-semibold">Total Price</span>
              <span className="text-sm font-semibold text-[#1C4DAA]">
                {totalPrice.toFixed(2)}$
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
