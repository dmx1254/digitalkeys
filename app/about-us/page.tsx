import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-start justify-center mx-auto my-8 gap-4">
      <h2 className="px-4 text-2xl text-gray-800 font-bold capitalize">
        About us
      </h2>
      <div className="px-4 w-full flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-bold text-center">
              We aim to{" "}
              <span className="text-[#1c4DAA] font-bold underline">
                Empower
              </span>{" "}
              every{" "}
            </p>
            <p className="text-2xl font-bold text-center">
              Business and Individual to achieve more.
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <p className="w-full flex text-center text-sm">
              All Digital Keys is a platform that provides buyers from all
              around the world with the possibility to buy software keys at a
              fair price with no hassle through an innovative platform.
            </p>
            <p className="w-full flex text-center text-sm">
              We are the best way to buy, install and use software! With All
              Good Keys Software you won’t just get an installation package and
              a wish good luck. With us you’ll be sure that the license is
              legitimate and the software will surely work to your liking.
            </p>
            <p className="w-full flex text-center text-sm">
              Our software are 100% legitimate and can be installed safely and
              reliably. We deliver the software and assist you during the
              installation process from start to finish. We won’t stop until
              you’re fully satisfied!
            </p>
          </div>
        </div>
        <img src="/about.png" alt="about picture" className="w-full max-w-[600px] h-auto object-cover object-center my-4" />
      </div>
      <img
        src="/logo.png"
        alt="logo"
        className="self-center w-60 h-32 object-cover object-center mt-14"
      />
    </div>
  );
};

export default AboutPage;
