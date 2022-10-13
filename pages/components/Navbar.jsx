import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineInfoCircle,
  // AiOutlineClose,
  // AiOutlineMail,
  AiOutlineMenu,
} from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
// import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = (nav) => {
    setNav(!nav);
  };

  console.log(nav);

  return (
    <div className="fixed w-full h-30 shadow-xl py-3 px-6 bg-gray-800 z-[100]">
      <nav className="flex justify-between items-end w-full h-full px-2 2xl:px-16">
        <div className="flex items-center text-xl space-x-3">
          <BsCart4 className="text-blue-600 text-5xl" />
          <span className="text-yellow-600 text-xl font-extrabold">
            ShopForMe
          </span>
        </div>
        <div>
          <ul className="hidden md:flex justify-end items-end pr-8 gap-5 capitalize tracking-widest text-2lg">
            <li className="hover:bg-[#2b6e70]  rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-2 cursor-pointer">
              <Link href="/">
                <a className="flex gap-3">
                  home
                  <AiOutlineHome size={20} className="flex items-center my-1" />
                </a>
              </Link>
            </li>

            <li className="hover:bg-[#2b6e70] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-2 cursor-pointer">
              <Link href="/about">
                <a className="flex gap-3">
                  about
                  <AiOutlineInfoCircle
                    size={20}
                    className="flex items-center my-1"
                  />
                </a>
              </Link>
            </li>

            <li className="hover:bg-[#2b6e70] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-2 cursor-pointer">
              <Link href="/contact">
                <a className="flex gap-3">
                  contact
                  <RiContactsLine
                    size={20}
                    className="flex items-center my-1"
                  />
                </a>
              </Link>
            </li>

            <li className="hover:bg-[#2b6e70] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-2 cursor-pointer capitalize">
              <Link href="/login">
                <a className="flex gap-3">
                  shop for me
                  <AiOutlineLogin
                    size={20}
                    className="flex items-center my-1"
                  />
                </a>
              </Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
          <div
            className={
              nav
                ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70'
                : ''
            }
          >
            <div
              className={
                nav
                  ? 'md:hidden fixed left-0 top-0 w-[75%] sm:-[60%] md:-[45%] h-screen bg-[#dfa6cc] p-10 ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              }
            >
              <div className="flex w-full items-center justify-between">
                <p className="text-green-500 text-5xl">shop for me</p>

                {/* side bar */}
                {/* <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
                >
                  <AiOutlineClose size={25} />
                </div> */}
              </div>

              {/* the horizontal line under the navbar  */}
              {/* <div className="border-b border-gray-300 my-4"></div> */}

              {/* <div className="py-4 flex flex-col ">
                <ul className="capitalize tracking-widest">
                  <li className="hover:bg-[#7cf0f5] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-1 cursor-pointer">
                    <Link href="/">
                      <a className="flex gap-3">
                        home
                        <AiOutlineHome
                          size={20}
                          className="flex items-center my-1"
                        />
                      </a>
                    </Link>
                  </li>

                  <li className="hover:bg-[#7cf0f5] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-1 cursor-pointer">
                    <Link href="/">
                      <a className="flex gap-3">
                        about
                        <AiOutlineInfoCircle
                          size={20}
                          className="flex items-center my-1"
                        />
                      </a>
                    </Link>
                  </li>

                  <li className="hover:bg-[#7cf0f5] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-1 cursor-pointer">
                    <Link href="/">
                      <a className="flex gap-3">
                        contact
                        <RiContactsLine
                          size={20}
                          className="flex items-center my-1"
                        />
                      </a>
                    </Link>
                  </li>

                  <li className="hover:bg-[#7cf0f5] rounded-md py-2 px-3 text-white hover:text-black font-medium hover:scale-105 ease-in duration-300 border-1 cursor-pointer">
                    <Link href="/">
                      <a className="flex gap-3">
                        login
                        <AiOutlineLogin
                          size={20}
                          className="flex items-center my-1"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div className="pt-40">

                
                {/* <p className="capitalize tracking-widest text-2lg text-white">
                  let's connect
                </p> */}


                {/* <div className="flex items-center justify-between my-4 w-full sm:w-[80%] text-2xl">
                  <div className="rounded-full shadow-lg shadow-white hover:bg-[#7cf0f5] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn className="" />
                  </div>

                  <div className="rounded-full shadow-lg shadow-white hover:bg-[#7cf0f5] p-3  cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>

                  <div className="rounded-full shadow-lg  shadow-white hover:bg-[#7cf0f5] p-3  cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>

                  <div className="rounded-full shadow-lg shadow-white hover:bg-[#7cf0f5] p-3  cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div> */}

                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
