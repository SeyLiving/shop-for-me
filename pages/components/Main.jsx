import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <>
      <div className="flex justify-center font-medium text-xl text-pink-800 mt-20 mb-2 bg-pink-200 py-5">
        <h1>Please Take Note: </h1>
      </div>

      <div>
        <p className="flex justify-center bg-pink-200 py-3 font-bold">
          Kindly Click [ ShopForMe ] on your [ Top-Right-Corner ] to put in the
          list of items <br />
          you want. We will help you shop for the best quality; at an affordable
          price
          <br />
          and assign our errand or service persons to deliver these items to
          your location.
          <br />
          Thank you. 😊
        </p>
      </div>

      <div className="grid md:grid-cols-4 m-2    lg:gap-[2rem] mx-20 bg-pink-200 ">
        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/milo.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
              Milo
            </h5>
            <p className="text-gray-300">
              Start your day with new energy and power from Milo.
            </p>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 22.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/tpaste.jpeg"
              alt="me"
              width="10px"
              height="10x"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Colgate ToothPaste
              </h5>
              <p className="text-gray-300">
                Always keep white, clean and fresh breath for the day.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 10.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/pad.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Paree Sanitary Pad
              </h5>
              <p className="text-gray-300">
                No leak, No stain from a paree sanitary pads. Stay dray & Clean.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 15.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/soap.jpeg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all uration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Geisha Natural Soap
              </h5>
              <p className="text-gray-300">
                Glow with the all new Moringa oil Geisha soap.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 9.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/indomie.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Indomie Instant Noodles
              </h5>
              <p className="text-gray-300">
                Tasty, spicy noodles available today on ShopForMe.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 5.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/yazz.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Yazz Washing Powder
              </h5>
              <p className="text-gray-300">
                Wash well, Smell fresh with Yazz washing powder.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 80.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/spray1.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Lovelyn Body Splash
              </h5>
              <p className="text-gray-300">
                Get these fresh and super scented body spalsh.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 20.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/nido.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Nestle Creamy Nido
              </h5>
              <p className="text-gray-300">
                Get a tasty and creamy beverage with Nestle Nido mix today.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-400 dark:text-white">
                GHs 30.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/wines.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                South African Wine
              </h5>
              <p className="text-gray-300">
                If it is time to dine and wine. Get the best wine right here.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-gray-400 dark:text-white">
                GHs 20.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/rice.png"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-1">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Classic Basmati Rice
              </h5>
              <p className="text-gray-300">
                Farmers harvest Classic Basmati Rice serves you the best meal.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-gray-400 dark:text-white">
                GHs 25.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/frytol.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Frytol Cooking Oil
              </h5>
              <p className="text-gray-300">
                The best cooking oil is here and it is frytol cooking oil.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-gray-400 dark:text-white">
                GHs 20.00
              </span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              src="/assets/crackers.jpg"
              alt="me"
              width="150px"
              height="150px"
              layout="responsive"
              objectFit="cover"
              className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-yellow-500 dark:text-yellow">
                Cream Crackers
              </h5>
              <p className="text-gray-300">
                Best Crisp crackers that will keep you highly-motivated.
              </p>
            </a>
            <div class="flex items-center mt-2.5 mb-1"></div>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-gray-400 dark:text-white">
                GHs 10.00
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-bold text-blue-900 text-3xl mt-40 mb-5 bg-pink-200 p-8">
        <h1>Customer Reviews</h1>
      </div>

      <section className="max-w-5xl mr-10 mx-80 lg:max-auto text-black bg-blue-400 rounded-3xl mb-3">
        <div className="flex justify-center">
          <h1 className="font-semibold font-style: italic text-pink-900">
            Florence{" "}
          </h1>
        </div>
        <div>
          <p className="flex justify-around tracking-widest text-md font-style: italic p-2">
            I love the whole shopping experience at ShopForMe. It offers the
            opportunity
            <br />
            to shop from the comfort of your home.
            <br />
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-40 lg:max-auto text-black bg-blue-400 rounded-3xl mb-3">
        <div className="flex justify-center">
          <h1 className="font-semibold font-style: italic text-pink-900">
            Lovelace{" "}
          </h1>
        </div>
        <div>
          <p className="flex justify-around tracking-widest text-md font-style: italic p-2">
            For me, this online supermarket continues to be at the top of my
            list right now. <br />
            I choose to relax at home, send in the list items I need and it will
            be delivered
            <br />
          </p>
        </div>
      </section>
      <section className="max-w-5xl mr-10 mx-10 lg:max-auto text-black bg-blue-400 rounded-3xl mb-10">
        <div className="flex justify-center">
          <h1 className="font-semibold font-style: italic text-pink-900">
            Clinton{" "}
          </h1>
        </div>
        <div>
          <p className="flex justify-around tracking-widest text-md font-style: italic p-2">
            ShopForMe has made things easier. I will recommend this onine shop
            to anybody at all who wants to
            <br />
            experience a stress free shopping and also have well trusted
            individuals deliver their products.
            <br />
          </p>
        </div>
      </section>
    </>
  );
};

export default Main;
