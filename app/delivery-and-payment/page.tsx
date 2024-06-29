import React from "react";

const DeliveryAndPaymentPage = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-start justify-center mx-auto my-8 gap-4">
      <h2 className="px-4 text-2xl text-gray-800 font-bold capitalize">
        Delivery & Payment
      </h2>
      <div className="w-full px-4 flex flex-col items-center gap-6 my-4">
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col items-start">
            <p className="font-bold text-gray-800 text-sm">DELIVERY</p>
            <p className="w-full flex text-sm">
              we deliver orders automatically and instantly after purchase, but
              it can take up to 8 hours if something happens. All
              product-related services from AllGoodKeys.com are delivered via
              email. The CD key or codes sold on AllGoodKeys.com will be
              delivered via email and can also be found under order details in
              your account section, so there is no shipping charge.
            </p>
          </div>
          <p className="text-sm my-3">
            “What can I do if I can’t find my delivery on my email address?”
          </p>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm">
              <span className="font-semibold">1.</span>Please check your spam or
              junk folder, in case you didn’t receive your email.
            </p>
            <p className="text-sm">
              <span className="font-semibold">2.</span>Please make sure your
              payment has been completed successfully.
            </p>
            <p className="text-sm">
              <span className="font-semibold">3.</span>If we need more
              information or if something does not correspond to you, we will
              contact you by e-mail.
            </p>
            <p className="text-sm">
              <span className="font-semibold">4.</span>If you haven’t received
              any email, make sure your email address is correct and contact us
              !
            </p>
          </div>
          <div className="flex flex-col items-start gap-8 my-8">
            <div className="flex flex-col items-start">
              <p className="font-bold text-gray-800 text-sm">PAYMENTS</p>
              <p className="w-full flex text-sm">
                All Digital Key currently accepts the following payment methods:
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-sm">
                <span className="font-semibold">1.Paypal: </span>Please check
                your spam or junk folder, in case you didn’t receive your email.
              </p>
              <p className="text-sm">
                <span className="font-semibold">2.Credit cards(Stripe): </span>
                Please make sure your payment has been completed successfully.
              </p>
              <p className="text-sm">
                <span className="font-semibold">3.Google Pay: </span>If we need
                more information or if something does not correspond to you, we
                will contact you by e-mail.
              </p>
              <p className="text-sm">
                <span className="font-semibold">4.Apple Pay: </span>If you
                haven’t received any email, make sure your email address is
                correct and contact us !
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/logo.png"
        alt="logo"
        className="self-center w-44 h-40 md:w-60 md:h-56 object-contain object-center -mt-20"
      />
    </div>
  );
};

export default DeliveryAndPaymentPage;
