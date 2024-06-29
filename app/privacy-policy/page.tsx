import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-start justify-center mx-auto my-8 gap-4">
      <h2 className="px-4 text-2xl text-gray-800 font-bold capitalize">
        Privacy Policy
      </h2>
      <div className="w-full px-4 flex flex-col items-center gap-6 my-4">
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col items-start">
            <p className="font-bold text-gray-800 text-sm mb-8">Who we are ?</p>
            <p className="w-full flex text-sm">
              All Digital Keys LTD (“us”, “we”, or “our”) operates the
              allgoodkeys.com website (the “Service”).
            </p>
            <p className="w-full flex text-sm my-4">
              This page informs you of our policies regarding the collection,
              use and disclosure of Personal Information when you use our
              Service.
            </p>
            <p className="w-full flex text-sm">
              We will not use or share your information with anyone except as
              described in this Privacy Policy.
            </p>
            <p className="w-full flex text-sm my-4">
              We use your Personal Information for providing and improving the
              Service. By using the Service, you agree to the collection and use
              of information in accordance with this policy. Unless otherwise
              defined in this Privacy Policy, terms used in this Privacy Policy
              have the same meanings as in our Terms and Conditions, accessible
              at allgoodkeys.com
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 my-8">
            <div className="flex flex-col items-start">
              <p className="font-bold text-gray-800 text-sm">
                What personal data we collect and why we collect it
              </p>
              <p className="text-xs font-semibold mb-10">Comments</p>
              <p className="w-full flex text-sm mb-10">
                All Digital Key currently accepts the following payment methods:
              </p>
              <p className="w-full flex text-sm mb-10">
                When visitors leave comments on the site we collect the data
                shown in the comments form, and also the visitor’s IP address
                and browser user agent string to help spam detection.
              </p>
              <p className="w-full flex text-sm">
                An anonymized string created from your email address (also
                called a hash) may be provided to the Gravatar service to see if
                you are using it. The Gravatar service privacy policy is
                available here: https://automattic.com/privacy/. After approval
                of your comment, your profile picture is visible to the public
                in the context of your comment.
              </p>
              <p className="w-full flex text-sm font-semibold my-10">Media</p>
              <p className="w-full flex text-sm">
                If you upload images to the website, you should avoid uploading
                images with embedded location data (EXIF GPS) included. Visitors
                to the website can download and extract any location data from
                images on the website.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-sm font-semibold">Contact forms</p>
              <div className="flex flex-col items-start gap-2 ml-6 text-sm">
                <p>
                  <span className="text-xl font-bold">•</span> Name
                </p>
                <p>
                  <span className="text-xl font-bold">•</span> Email address
                </p>
                <p>
                  <span className="text-xl font-bold">•</span> Telephone number
                </p>
                <p>
                  <span className="text-xl font-bold">•</span> Address
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-sm">Cookies</p>

              <p className="w-full flex text-sm my-10">
                If you leave a comment on our site you may opt-in to saving your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details
                again when you leave another comment. These cookies will last
                for one year.
              </p>
              <p className="w-full flex text-sm mb-10">
                If you visit our login page, we will set a temporary cookie to
                determine if your browser accepts cookies. This cookie contains
                no personal data and is discarded when you close your browser.
              </p>
              <p className="w-full flex text-sm mb-10">
                When you log in, we will also set up several cookies to save
                your login information and your screen display choices. Login
                cookies last for two days, and screen options cookies last for a
                year. If you select “Remember Me”, your login will persist for
                two weeks. If you log out of your account, the login cookies
                will be removed.
              </p>
              <p className="w-full flex text-sm mb-10">
                If you edit or publish an article, an additional cookie will be
                saved in your browser. This cookie includes no personal data and
                simply indicates the post ID of the article you just edited. It
                expires after 1 day.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-sm">
                Embedded content from other websites
              </p>
              <p className="w-full flex text-sm my-10">
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </p>
              <p className="w-full flex text-sm mb-10">
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold text-base">Who we share your data with</p>
              <p className="w-full flex text-sm my-10">
                If you request a password reset, your IP address will be
                included in the reset email.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-bold text-base">
                How long we retain your data
              </p>
              <p className="w-full flex text-sm my-10">
                If you leave a comment, the comment and its metadata are
                retained indefinitely. This is so we can recognize and approve
                any follow-up comments automatically instead of holding them in
                a moderation queue.
              </p>
              <p className="w-full flex text-sm my-10">
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-bold text-base">
                What rights you have over your data
              </p>
              <p className="w-full flex text-sm my-10">
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-bold text-base">Where we send your data</p>
              <p className="w-full flex text-sm my-10">
                Visitor comments may be checked through an automated spam
                detection service.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold text-base">Links To Other Sites</p>
              <p className="w-full flex text-sm">
                Our Service may contain links to other sites that are not
                operated by us. If you click on a third party link, you will be
                directed to that third party’s site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p className="w-full flex text-sm mt-4 mb-10">
                Our Service may contain links to other sites that are not
                operated by us. If you click on a third party link, you will be
                directed to that third party’s site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold text-base">Children’s Privacy</p>
              <p className="w-full flex text-sm">
                Our Service does not address anyone under the age of 18
                (“Children”).
              </p>
              <p className="w-full flex text-sm mt-4 mb-10">
                We do not knowingly collect personally identifiable information
                from children under 18. If you are a parent or guardian and you
                are aware that your child has provided us with Personal
                Information, please contact us. If we discover that a child
                under 18 has provided us with Personal Information, we will
                delete such information from our servers immediately.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold text-base">
                Changes To This Privacy Policy
              </p>
              <p className="w-full flex text-sm">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p className="w-full flex text-sm mt-4 mb-10">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold text-base">Contact Us</p>
              <p className="w-full text-sm">
                If you have any questions about this Privacy Policy, please{" "}
                <Link href="/contact-us" className="text-[#1c4DAA] cursor-pointer">
                  contact us
                </Link>
                .
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

export default PrivacyPolicy;
