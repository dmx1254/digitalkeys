import React from "react";
import { Mail, PenLine } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center justify-center mx-auto">
      <div className="w-full flex max-md:flex-col items-center py-14 px-4 gap-6">
        <div className="w-full max-w-md lg:max-w-xl flex flex-col items-start max-md:mx-auto gap-4">
          <h2 className="text-2xl text-gray-800 font-bold">Contact us</h2>
          <form action="" className="flex flex-col items-start gap-4 w-full">
            <div className="relative w-full flex flex-col items-start">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full pr-8 rounded text-sm p-2.5 outline-none border border-gray-300 placeholder:text-gray-300"
              />
              <span className="absolute text-gray-300 left-[92%] sm:left-[94%] top-[50%] translate-y-[-50%]">
                <Mail size={20} />
              </span>
            </div>
            <div className="relative w-full flex flex-col items-start">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full pr-8 rounded text-sm p-2.5 outline-none border border-gray-300 placeholder:text-gray-300"
              />
              <span className="absolute text-gray-300 left-[92%] sm:left-[94%] top-[50%] translate-y-[-50%]">
                <PenLine size={20} />
              </span>
            </div>
            <div className="relative w-full flex flex-col items-start">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full pr-8 rounded text-sm p-2.5 outline-none border border-gray-300 placeholder:text-gray-300 min-h-36"
              ></textarea>
              <span className="absolute text-gray-300 left-[92%] sm:left-[94%] top-[14%] translate-y-[-50%]">
                <PenLine size={20} />
              </span>
            </div>
            <button
              type="submit"
              className="w-full flex items-start justify-center outline-none border border-transparent text-sm bg-[#1c4DAA] text-white rounded p-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#1c4DAA] hover:border-[#1c4DAA]"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="flex text-sm text-center font-semibold">
            Get answers to all your questions you might have.
          </p>
          <p className="flex text-sm text-center">
            We will answer any questions you may have about our online sales
            right here.{" "}
          </p>
          <div className="flex items-center gap-2">
            <img
              src="/logo-whats.webp"
              alt="contact us with whatsapp"
              className="w-8 h-8 object-cover object-center"
            />
            <span className="text-lg text-gray-800 font-bold">
              +1(607)261-5050
            </span>
          </div>
        </div>
      </div>
      <img
        src="/logo.png"
        alt="logo"
        className="self-center w-60 h-32 object-cover object-center mt-14"
      />
      
    </div>
  );
};

export default ContactPage;
