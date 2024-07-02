import Link from "next/link";
import React from "react";

const RefundAndReturnPolicy = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-start justify-center mx-auto my-8 gap-4">
      <h2 className="px-4 text-2xl text-gray-800 font-bold capitalize">
        Refund & Returns Policy
      </h2>
      <div className="w-full px-4 flex flex-col items-center gap-6 my-4">
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col items-start">
            <p className="font-bold text-gray-800 text-base">
              Refunds are issued for the following reasons:
            </p>
            <p className="font-semibold text-gray-800 text-sm">Non-delivery</p>
            <p className="w-full text-sm">
              In rare cases mailing issues from your e-mail provider or your
              mail server might not enable you to receive a delivery e-mail from
              us or the mail ends up in a spam or junk folder. In this case we
              recommend checking these folders or{" "}
              <Link href="/contact-us" className="text-[#1c4DAA]">
                contacting us
              </Link>
              for assistance i.e to resend mail or send to alternate email
              address. Claims for non-delivery must be submitted to our customer
              service department in writing within 7 days from the order placing
              date. Otherwise the product will be considered received and
              downloaded. If you do not properly{" "}
              <Link href="/contact-us" className="text-[#1c4DAA]">
                contact us
              </Link>{" "}
              during this period, you agree that we may silence as a successful
              download of the product with no further right of return for a
              ‘non-receipt’ reason.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 my-8">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-800 text-sm">Major defects</p>
              <p className="w-full flex text-sm">
                Although all the products are thoroughly tested before release,
                unexpected errors may occur. Such issues if we fail to correct
                it within 48 hours from the date of the initial complaint or any
                other notification provided by the customer, the refund will be
                issued to the customer in full or at customer’s choice or
                replacement of the product of the same or around the same value
                can be offered.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-800 text-sm">
                Product not as described
              </p>
              <p className="w-full flex text-sm">
                Such an issue should be reported to our technical support team
                within 30 days from the date of the purchase. Clear evidence
                must be provided in writing that the purchased product is not as
                it is described on the website. Complaints which are based
                merely on the customer’s false expectations are not honored. Our
                Technical Support Team is always eager to assist you and deliver
                highly professional support in a timely manner. Thank you for
                for your interest.
              </p>
              <p className="w-full text-sm">
                Our policy offers a full refund{" "}
                <span className="font-semibold">
                  within 30 days of your date of purchase.
                </span>{" "}
                We’d love to know what went wrong and how we can improve, so
                please include details about the reason for your refund request
                if you reach out to us directly.
              </p>
              <p className="w-full text-sm">
                Our payment process submit the refund immediately and make every
                attempt to process the refund as quickly as possible. Your
                financial institution can take up to 20 days for the refund to
                reflect in your bank account/card. More details can be found via
                Stripe.com at{" "}
                <Link
                  href="https://support.stripe.com/questions/customer-refund-processing-time"
                  className="text-[#1c4DAA]"
                >
                  Customer refund processing time.
                </Link>
              </p>
            </div>
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

export default RefundAndReturnPolicy;
