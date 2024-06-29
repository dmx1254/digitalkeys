"use client";
import React, { useState } from "react";
import { Minus, Plus, Trash } from "lucide-react";
import useStore from "@/lib/manage";
import Link from "next/link";

const CartPage = () => {
  const { cart, totalPrice, deleteFromCart, updateQuantity } = useStore();
  const [qty, setQty] = useState<number>(1);
  const handleIncrease = (id: string, quantity: number) => {
    let newQty: number = quantity + 1;
    updateQuantity(id, newQty);
  };
  const handleDecrease = (id: string, quantity: number) => {
    let newQty: number = quantity - 1;
    updateQuantity(id, newQty);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col items-start justify-center mx-auto my-8 gap-4 px-4">
      <div className="w-full flex items-center justify-between pb-8 border-b border-gray-200">
        <span className="text-2xl text-gray-800 font-bold">
          My shopping cart
        </span>
        {cart.length > 0 ? (
          <Link
            href="/checkout/payment"
            className="text-center text-sm outline-none border border-transparent rounded bg-[#1C4DAA] text-white py-2 px-4 transition duration-300 ease-in-out hover:border-[#1C4DAA] hover:bg-white hover:text-[#1C4DAA] min-w-52"
          >
            Checkout
          </Link>
        ) : (
          <button className="text-center text-sm outline-none border border-transparent rounded bg-[#1C4DAA] text-white py-2 px-4 transition duration-300 ease-in-out hover:border-[#1C4DAA] hover:bg-white hover:text-[#1C4DAA] min-w-52">
            Checkout
          </button>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-full flex items-center justify-between">
          <span className="text-sm invisible">Product</span>
          <span className="text-sm translate-x-[20%] md:translate-x-[45%]">
            Product Name
          </span>
          <span className="text-sm translate-x-[70%] md:translate-x-[140%]">
            Quantity
          </span>
          <span className="text-sm translate-x-[100%] md:translate-x-[180%]">
            Price
          </span>
          <span className="text-sm invisible">action</span>
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          {cart.map((item) => (
            <div
              key={item.productId}
              className="w-full flex items-center justify-between gap-2"
            >
              <img
                src={item.icon}
                alt="windows 10"
                className="w-20 h-16 object-contain object-center"
              />

              <span className="text-sm text-[#1C4DAA] text-center">
                Windows 11 Home Activation key
              </span>

              <div className="flex items-center gap-4">
                <button
                  disabled={item.quantity <= 1}
                  className={`outline-none border-none flex items-center justify-center bg-gray-200 rounded p-2 ${
                    item.quantity <= 1 ? "opacity-50" : "opacity-100"
                  }`}
                  onClick={() => handleDecrease(item.productId, item.quantity)}
                >
                  <Minus size={10} />
                </button>
                <span className="text-sm font-bold">{item.quantity}</span>
                <button
                  className="outline-none border-none flex items-center justify-center bg-gray-200 rounded p-2"
                  onClick={() => handleIncrease(item.productId, item.quantity)}
                >
                  <Plus size={10} />
                </button>
              </div>

              <span className="text-sm text-[#1C4DAA] text-center font-semibold">
                {item.price}$
              </span>

              <button
                className="outline-none border-none text-gray-600"
                onClick={() => deleteFromCart(item.productId)}
              >
                <Trash size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 ? (
        <div className="w-full flex max-md:flex-col items-center md:items-end justify-between mt-6 gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-start gap-2">
            <span className="text-sm">Additionnal comments</span>
            <textarea
              name="comment"
              id="comment"
              placeholder="Write your comment"
              className="w-full resize-none p-4 border border-gray-200 rounded placeholder:text-gray-400"
            ></textarea>
            <button className="w-full text-center text-sm outline-none border border-transparent rounded bg-[#1C4DAA] text-white py-2 px-4 transition duration-300 ease-in-out hover:border-[#1C4DAA] hover:bg-white hover:text-[#1C4DAA] mt-2">
              Updates notes
            </button>
          </div>
          <div className="w-full md:w-1/3  flex flex-col items-start gap-2">
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
          <div className="w-full md:w-1/3  flex flex-col items-start gap-2">
            <div className="w-full flex flex-col items-start gap-2 bg-[#FAFAFA] p-4 border border-gray-200 rounded">
              <div className="flex items-center gap-2">
                <span className="text-sm">Shipping:</span>
                <span className="text-sm">Not calculated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Total Price:</span>
                <span className="text-sm text-[#1C4DAA] font-semibold">
                  {totalPrice.toFixed(2)}$
                </span>
              </div>
            </div>
            <Link
              href="/checkout/payment"
              className="w-full text-center text-sm outline-none border border-transparent rounded bg-[#1C4DAA] text-white py-2 px-4 transition duration-300 ease-in-out hover:border-[#1C4DAA] hover:bg-white hover:text-[#1C4DAA] mt-2"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;
