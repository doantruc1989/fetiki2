import Link from "next/link";
import React from "react";

const Nav2 = () => {
  return (
    <div className="sticky top-0 z-50 w-full mx-auto">
      <nav className="navbar flex items-center justify-between py-5 h-fit px-4">
        <Link href="/">
        <img
          src="image/logotiki.png"
          className="h-10 md:h-14"
          alt="tiki Logo"
        /></Link>

        <ol className="flex items-center w-1/2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Đăng{" "}
              <span className="hidden sm:inline-flex sm:ml-2">nhập</span>
            </p>
          </li>
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
              <span className="mr-2">2</span>
              Giao{" "}
              <span className="hidden sm:inline-flex sm:ml-2">hàng</span>
            </p>
          </li>
          <li className="flex items-center">
          <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
              <span className="mr-2">3</span>
              Thanh{" "}
              <span className="hidden sm:inline-flex sm:ml-2">toán</span>
            </p>
          </li>
        </ol>

        <div>
          <img src="image/hotline.png" alt="tiki Logo" />
        </div>
      </nav>
    </div>
  );
};

export default Nav2;
