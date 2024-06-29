"use client";

import React, { ChangeEvent, useState } from "react";
import { products } from "@/lib/data";
import { Product } from "@/lib/types";
import { Minus, Plus } from "lucide-react";
import ShopFooter from "@/components/ShopFooter";
import Link from "next/link";
import useStore from "@/lib/manage";

const ProductDetail = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const { addToCart, updatePersonal } = useStore();
  const { productId } = params;
  const [lastname, setLastname] = useState<string>("");
  const [lastnameError, setLastnameError] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [firstnameError, setFirstnameError] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [contactError, setContactError] = useState<string>("");
  // console.log(productId);
  const produ = productId.split("-");
  const itemId = produ[produ.length - 1];
  const item: Product = products.filter((item) => item.id === itemId)[0];
  const [qty, setQty] = useState<number>(1);

  const handleIncrease = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const handleDecrease = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
  };

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
      let productId = item.id;
      let title = item.title;
      let quantity = qty;
      let category = item.category;
      let price = item.price;
      let icon = item.icon;
      let discount = item.discount;

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
  };

  return (
    <div className="w-full h-full max-w-5xl flex max-md:flex-col items-center md:items-start justify-center mx-auto py-20 px-4 gap-8">
      <div className="md:sticky md:top-20">
        <img
          src={`/${item.icon}`}
          alt={item.title}
          className="w-[400px] h-[450px] object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col items-center max-md:max-w-[400px] md:items-start gap-4">
        <span className="text-xl font-bold">{item.title}</span>
        <div className="flex items-center gap-2">
          <span className="text-[#1c4DAA] text-2xl font-semibold">
            {item.price}$
          </span>
          <span className="text-red-600 line-through text-base font-semibold">
            {item.discount}$
          </span>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <span>Customer Information</span>
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full flex items-center gap-4">
              <div className="flex flex-col gap-1 w-1/2">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFirstname(e.target.value)
                  }
                  className="w-full outline-none border border-gray-200 placeholder:text-gray-400 p-3 rounded text-sm"
                />
                <p className="w-full flex text-xs text-red-600">
                  {firstnameError}
                </p>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLastname(e.target.value)
                  }
                  placeholder="Lastname"
                  className="w-full outline-none border border-gray-200 placeholder:text-gray-400 p-3 rounded text-sm"
                />
                <p className="w-full flex text-xs text-red-600">
                  {lastnameError}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                name="emailorphone"
                placeholder="Phone or email"
                value={contact}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setContact(e.target.value)
                }
                className="w-full outline-none border border-gray-200 placeholder:text-gray-400 p-3 rounded text-sm"
              />
              <p className="w-full flex text-xs text-red-600">{contactError}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-4 pb-4 border-b border-gray-200">
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
            className="w-full cursor-pointer outline-none rounded uppercase bg-[#1c4DAA] text-white text-sm font-bold p-2"
            onClick={handleAddToCart}
            disabled={!lastname || !firstname || !contact}
          >
            Buy it now
          </button>
        </div>
        <div className="w-72 self-center">
          <img
            src="/windows/purchase.png"
            alt="purchase"
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2 border-l-[2px] pl-1 border-violet-600">
          <span className="w-full text-[13px]">
            <strong>Warning!</strong>&nbsp;This product cannot be used to
            upgrade your system from other version!
          </span>
          <span className="w-full text-[13px]">
            If you encounter any issues during activation, please contact us.
          </span>
        </div>
        <div className="flex flex-col items-start gap-8">
          <p className="w-full flex text-sm">{item.desc}</p>
          <p className="flex flex-col items-start text-sm">
            <span className="font-bold text-gray-800">
              Security features of Windows 11 Home Operating System
            </span>{" "}
            Today, more than ever, cyber-security plays a fundamental role in
            the use of software and the Internet. For this reason, the Windows
            11 Home operating system has been enhanced and improved to provide
            extensive protection from possible attacks, viruses or malware. Also
            FIDO 2.0 certified. The FIDO (Fast IDentity Online) Alliance is an
            industrial consortium founded with the purpose of making online
            authentication safer and simpler at the same time.
          </p>
          <p className="flex flex-col items-start text-sm">
            <span className="font-bold text-gray-800">
              Game performance boost
            </span>
            more The Windows 11 Home operating system has been enhanced to offer
            maximum performance with 4k resolution support, games are now
            displayed at maximum resolution. And with DirectX 12, visuals and
            graphics have been significantly improved. For this reason, we
            recommend the download and installation also to gamers who want the
            high performance of their pc and device.
          </p>
          <div className="flex flex-col items-start text-sm">
            <span className="font-bold text-gray-800">
              Windows 11 Home is compatible with Office 2021
            </span>
            <p className="mb-2">
              Windows 11 Home support Office 2021 installation and
              compatibility. Find out more about&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Office 2021
              </Link>
              .
            </p>
            <p className="">
              Compatible with:&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Office 2019
              </Link>
              &nbsp;–&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Office 2016
              </Link>
              &nbsp; –&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Office 2013
              </Link>
              &nbsp; –&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Office 2010
              </Link>
            </p>
            &nbsp;
            <p className="-mt-2">
              is also available&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Microsoft Office for MAC
              </Link>
              .
            </p>
            &nbsp;
            <p className="-mt-2">
              Other available Operating Systems:&nbsp;
              <Link className="text-[#2B82C9]" href="#">
                Windows 11
              </Link>
              &nbsp; ,
              <Link className="text-[#2B82C9]" href="#">
                Windows 10 Pro
              </Link>
              .
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-4 text-sm">
            <p className="w-full flex font-bold text-gray-800">
              What will I receive if I purchase Windows 11 Home 32/64-bit?
            </p>
            <p className="w-full">
              The product is delivered within seconds directly via email,{" "}
              <strong className="font-semibold">
                this avoiding the environmental impact of shipping physical
                goods.
              </strong>
            </p>
            <div className="w-full flex flex-col items-start gap-2">
              <p>
                – 1 Original Microsoft Activation Code for Windows 10
                Professional valid for use in 1 PC (Product Key)
              </p>
              <p>– Download link for Windows 11 Home 32/64-bit (ISO File)</p>
              <p>– Quick and easy installation guide</p>
              <p>– Free technical support</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full flex flex-col items-start gap-4 text-sm -mt-2">
          <p className="w-full flex font-bold text-gray-800">
            Find more Products in All Good Keys
          </p>
          <div className="w-full flex-col items-start gap-2">
            <div className="w-full flex items-center">
              <p className="text-[#2B82C9]">
                {" "}
                <Link href="#">Windows Operating Systems</Link>:{" "}
                <Link href="#">Windows 11</Link> –{" "}
                <Link href="#">Windows 10</Link> –{" "}
                <Link href="#">Windows 8</Link>
              </p>
            </div>
            <div className="w-full flex items-center">
              <p className="text-[#2B82C9]">
                {" "}
                <Link href="#">Microsoft Office Suites</Link>:{" "}
                <Link href="#">Office 2021</Link> –{" "}
                <Link href="#">Office 2019</Link> –{" "}
                <Link href="#"> Office 2016</Link> –{" "}
                <Link href="#"> Office for Mac</Link>
              </p>
            </div>
            <div className="w-full flex items-center">
              <p className="text-[#2B82C9]">
                {" "}
                <Link href="#">Antivirus</Link>: <Link href="#">Kaspersky</Link>{" "}
                – <Link href="#">ESET</Link> – <Link href="#">Avast</Link> –{" "}
                <Link href="#">AVG</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShopFooter
        qty={qty}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        productId={item.id}
        title={item.title}
        quantity={qty}
        category={item.category}
        price={item.price}
        icon={item.icon}
        discount={item.discount}
        lastname={lastname}
        firstname={firstname}
        contact={contact}
        setLastnameError={setLastnameError}
        setFirstnameError={setFirstnameError}
        setContactError={setContactError}
      />
    </div>
  );
};

export default ProductDetail;
