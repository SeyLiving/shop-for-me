import Image from "next/image";
// import Link from 'next/link';
import React from "react";
// import { BsTwitter } from 'react-icons/bs';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import Footer from '../components/Footer';
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-300 pt-20">
        <section className="max-w-8xl mx-60 lg:max-auto py-1 space-y-2 text-black bg-yellow-600 p-10  mb-40 mt-5 rounded-md">
          <div className="p-3 m-2">
            <h1 className="flex justify-center tracking-widest text-2xl uppercase py-2 px-5 font-bold text-blue-200">
              About Us
            </h1>
            <p className="mb-8 mt-3 flex justify-around tracking-widest text-xl font-style: italic font-md text-gray-900">
              ShopForMe is an online supermarket that offers users the
              opportunity to tender in a list of their necessary items; ranging
              from home care products, packaged foodstuff, cosmetics, clothing
              and others. We will then shop for these items on your behalf,
              request and assign our errand or service persons to deliver these
              items to your location. And also, please take note. We have all
              the best deals in terms of pricing, discounts and quality of
              products.
              <br />
              Below is a catalogue of our competent staff and service persons
              who are always willing and ready to undertake all your delivery
              errands.
            </p>
          </div>
        </section>

        {/* <div className="flex flex-col md:flex-row justify-center ">
          <div className="shadow-xl rounded-md border-5 bg-slate-500 h-[30rem] w-[25rem] m-10 p-8">
            <div className="rounded-full bg-red-500 w-40 h-40 mx-auto overflow-hidden">
              <Image
                src="/assets/shopforme1.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                owusu victor
              </p>

              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                059-588-1014
              </p>
              <div className="flex justify-center gap-5 p-3 mt-[4rem]  px-5 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg hover:text shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsTwitter />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="shadow-xl border-5 rounded-md bg-slate-500 h-[30rem] w-[25rem] m-10 p-8">
            <div className="rounded-full bg-red-500 w-40 h-40 mx-auto overflow-hidden">
              <Image
                src="/assets/shopforme1.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              />
            </div>

            <div className="">
              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                owusu victor
              </p>

              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                059-588-1014
              </p>
              <div className="flex justify-center gap-5 mt-[4rem] py-3 px-5 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsTwitter />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="">
          <h1 className="flex justify-center tracking-widest text-2xl uppercase py-2 px-5 font-bold text-blue-900">
            Developers
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:gap-[2rem] mx-60 bg-blue-200 mb-40">
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/sey.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Livingstone Sey
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Snr. Software Developer
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/owusu.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class=" text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Victor Owusu
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Snr. Software Developer
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="flex justify-center tracking-widest text-2xl uppercase py-2 px-5 font-bold text-blue-900">
            Our Staff
          </h1>
        </div>

        <div className="grid md:grid-cols-6 lg:gap-[1rem] mx-20 bg-blue-200 mb-20">
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/sandra.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
            />
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Patricia Manu
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Human Resource Mg.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/pet.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Phil Jones
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Acountant
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/key.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Nana Ama
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Exec. Secretary.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/ces.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class=" text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Ella Berries
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Company Lawyer
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/sam.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Sam Annang
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Marketing Mg.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/son.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  James Bowel
                </h5>
              </a>
              <p class="font-small text-gray-300 dark:text-gray-300">
                Internal Auditor
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-10">
          <h2 className="flex justify-center uppercase text-2xl tracking-widest mb-5 mt-40 font-bold text-blue-900">
            Errand / Service Delivery Persons
          </h2>
        </div>

        <div className="grid md:grid-cols-4 lg:gap-[1rem] mx-20 bg-blue-200 mb-20">
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/assets/errand3.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
            />
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Martin Mellow
                </h5>
              </a>
              <p class="font-small text-gray-200 dark:text-gray-200">
                Delivery Areas:
              </p>
              <p class="font-small text-gray-700 dark:text-gray-400">
                Spintex, Sakumono, Tema.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/errand6.png"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Agnes Gyan
                </h5>
              </a>
              <p class="font-small text-gray-200 dark:text-gray-200">
                Delivery Areas:
              </p>
              <p class="font-small text-gray-700 dark:text-gray-400">
                Madina, Adenta, Oyarifa, AyiMensa.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/errand4.jpeg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Naa Shika
                </h5>
              </a>
              <p class="font-small text-gray-200 dark:text-gray-200">
                Delivery Areas:
              </p>
              <p class="font-small text-gray-700 dark:text-gray-400">
                Nungua, Teshie, Labadi, Osu.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src="/assets/errand2.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-sm h-auto rounded-lg transition-all duration-300 cursor-pointer"
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class=" text-lg font-small tracking-tight text-yellow-500 dark:text-yellow">
                  Fred Wiston
                </h5>
              </a>
              <p class="font-small text-gray-200 dark:text-gray-200">
                Delivery Areas:
              </p>
              <p class="font-small text-gray-700 dark:text-gray-400">
                Achimota, Dzorwulu, Roman Ridge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default About;
