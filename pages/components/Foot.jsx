import Link from "next/link";
import React from "react";

const Foot = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-600">
          ShopForMe
        </span>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 mx-2 px-2">
          <li className="gap-3 px-3">
            <Link href="/" class="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li className="gap-3 px-3">
            <Link href="/about" class="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li className="gap-3 px-3">
            <Link href="/contact" class="mr-4 hover:underline md:mr-6 ">
              Contact
            </Link>
          </li>
          <li className="gap-3 px-3 text-yellow-600">
            <Link href="/login" class="hover:underline">
              ShopForMe
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 SeyWus Technologies. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Foot;
