"use client";

import useStore from "@/lib/manage";
import { Minus, Plus } from "lucide-react";
import React from "react";

const ShopFooter = ({
  qty,
  handleIncrease,
  handleDecrease,
  productId,
  title,
  quantity,
  category,
  price,
  icon,
  discount,
  lastname,
  firstname,
  contact,
  setLastnameError,
  setFirstnameError,
  setContactError,
}: {
  qty: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  productId: string;
  title: string;
  quantity: number;
  category: string;
  price: number;
  icon: string;
  discount: number;
  lastname: string;
  firstname: string;
  contact: string;
  setLastnameError: (err: string) => void;
  setFirstnameError: (err: string) => void;
  setContactError: (err: string) => void;
}) => {
  const { addToCart, updatePersonal } = useStore();
  const handleAddToCart = () => {
    if (!lastname || !firstname || !contact) {
      if (!lastname) {
        setLastnameError("Ce champ ne de doit pas etre vide");
      }
      if (!firstname) {
        setFirstnameError("Ce champ ne de doit pas etre vide");
      }
      if (!contact) {
        setContactError("Ce champ ne de doit pas etre vide");
      }
    } else {
      updatePersonal({ firstname, lastname, contact });

      addToCart({
        productId,
        title,
        quantity,
        category,
        price,
        icon,
        discount,
      });
      window.location.pathname = "/checkout/payment";
    }
    // console.log(productId, title, quantity, category, price, icon, discount);
    addToCart({ productId, title, quantity, category, price, icon, discount });
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center h-[70px] font-lato bg-white pt-4 border-t border-gray-200">
      <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button
            disabled={qty <= 1}
            className={`outline-none border-none flex items-center justify-center bg-gray-200 rounded p-2 ${
              qty <= 1 ? "opacity-50" : "opacity-100"
            }`}
            onClick={handleDecrease}
          >
            <Minus size={18} />
          </button>
          <span className="text-lg font-bold">{qty}</span>
          <button
            className="outline-none border-none flex items-center justify-center bg-gray-200 rounded p-2"
            onClick={handleIncrease}
          >
            <Plus size={18} />
          </button>
        </div>
        <button
          className="w-44 cursor-pointer outline-none rounded uppercase bg-[#1c4DAA] text-white text-sm font-bold p-2"
          onClick={handleAddToCart}
          disabled={!lastname || !firstname || !contact}
        >
          Buy it now
        </button>
      </div>
    </div>
  );
};

export default ShopFooter;
