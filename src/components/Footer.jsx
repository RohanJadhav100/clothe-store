"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { Mail } from "lucide-react";
import Link from "next/link";

const NewsletterFooterComponent = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="relative  mt-14 pt-3">
      {/* Newsletter Section - Overlapping */}
      <div className="relative -mb-24 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-3xl px-8 py-12 md:px-12 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side - Text */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-10 uppercase">
                  <Typography> STAY UP TO DATE ABOUT</Typography>
                  <br />
                  <Typography> OUR LATEST OFFERS</Typography>
                </h2>
              </div>

              {/* Right side - Email Form */}
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full md:w-80 pl-12 pr-4 py-3 bg-white rounded-full text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="w-full md:w-80 text-sm cursor-pointer bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-200"
                >
                  Send Us For Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 pt-36 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 gap-8">
            {/* Left Column - Brand */}
            <div>
              <h3 className="text-3xl font-black  text-black mb-6">
                <Typography>SHOP.CO</Typography>
              </h3>
              <p className="text-gray-600 mb-8 text-sm max-w-md leading-relaxed">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 transition duration-200 cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 transition duration-200 cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column - Help */}
            <div className="md:text-left md:justify-self-center">
              <h4 className="text-base font-medium text-black mb-6 uppercase tracking-wider">
                HELP
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-statement"
                    className="text-sm transition duration-200 animated-underline"
                  >
                    Privacy statement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-condition"
                    className="text-sm transition duration-200 animated-underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-sm transition duration-200 animated-underline"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Subscribed Email Thanks Pop-up */}
      {showModal && email && (
        <div className="fixed inset-0 bg-[#000000cc] bg-opacity-50 flex items-center justify-center z-[99999]">
          <div className="bg-white rounded-xl p-6 shadow-xl text-center max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
            <p className="mb-4 text-sm text-gray-700">
              Successfully subscribed to our newsletter.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-black text-sm text-white px-8 py-3  cursor-pointer rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterFooterComponent;
