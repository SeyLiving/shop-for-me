import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center mb-20">
        <h3 className=" mt-28 font-semibold text-2xl text-yellow-400 mb-2">
          Contact Us
        </h3>

        <form className="mt-5 border-2 max-w-xl w-full p-5 rounded space-y-3">
          <p className=" text-center uppercase  font-bold"> Leave a Message</p>
          <div className="">
            <label htmlFor="title" className="block">
              <p className="font-bold">Name</p>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md bg-gray-100"
            />
          </div>

          <div className="">
            <label htmlFor="title" className="block">
              <p className="font-bold">Email</p>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md bg-gray-100"
            />
          </div>

          <div className="">
            <label htmlFor="body" className="block">
              <p className="mb-5 font-bold">Your message</p>
            </label>
            <textarea
              name="body"
              id="body"
              type="text"
              cols="30"
              rows="10"
              className="bg-gray-100 border w-full outline-none mt-2 rounded-md"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="mt-2 border rounded-md text-yellow-500 font-bold bg-teal-700 shadow-lg py-3 px-8 hover:bg-cyan-500 hover:text-white duration-200 tracking-widest capitalize">
              SEND
            </button>
          </div>
        </form>
      </div>
      <Foot />
    </>
  );
};

export default Contact;
