import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/");
    }

    // console.log(data);
  };

  // function Login() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full"
      onSubmit={handleSubmit}
    >
      <div className="hidden sm:block">
        <Image
          className="w-full h-full grid object-cover"
          src="/assets/dress.jpg"
          alt="Me"
          width="1000px"
          height="1000px"
        />
      </div>

      <div className="bg-gray-800/30 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg boder">
          <h2 className="text-2xl text-white font-semibold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between text-gray-400  py-2">
            <p className="flex items-center">
              <input className="mr-2 mt-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <Link href="/products/add-product">
            <a className="text-yellow-900 w-full  px-[8.8rem] py-2 bg-[#2b6e70] shadow-lg  font-semibold rounded-lg">
              Sign In
            </a>
          </Link>

          <p className=" text-gray-400 m-5 flex  gap-5">
            Not having an account?
            <Link href="/signup">
              <a className=" text-yellow-900 shadow-lg  font-semibold rounded-lg">
                Sign up
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
