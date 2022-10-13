import React from 'react';
import Head from 'next/head';
import Main from "./Main";
// import Footer from './Footer';
import Navbar from "./Navbar";
// import Contact from '../pages/contact';
import Foot from "./Foot";

const Layout = ({ title }) => {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title + '-Shop for Me' : 'Shop for Me'}</title>
          <meta name="PreMest Project" content="Shop" />
        </Head>
      </div>
      <div className="bg-[#fcfffd] h-screen min-h-screen flex flex-col justify-between">
        <header>
          <Navbar />
        </header>

        <main>
          <Main />
        </main>

        <footer>
          {/* <Footer /> */}
          <Foot />
        </footer>
      </div>
    </>
  );
};

export default Layout;
