import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-start justify-around px-4 pt-8 pb-20">
      <div className="flex flex-col items-start gap-4">
        <h2 className="relative font-bold text-gray-800 cus-wid text-sm sm:text-base">About the store</h2>
        <div className="flex flex-col items-start gap-2 text-xs sm:text-sm">
          <Link href="/about-us">About us</Link>
          <Link href="/delivery-and-payment">How to Pay</Link>
          <Link href="/delivery-and-payment">Shipping & Delivery</Link>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <h2 className="relative font-bold text-gray-800 cus-wid text-sm sm:text-base">Terms and conditions</h2>
        <div className="flex flex-col items-start gap-2 text-xs sm:text-sm">
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/refund-and-return-policy">Return Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <h2 className="relative font-bold text-gray-800 cus-wid text-sm sm:text-base">Contact-us</h2>
        <div className="flex flex-col items-start gap-2 text-xs sm:text-sm">
          <Link href="/contact-us">Contact us</Link>
          <Link href="/about-us">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
