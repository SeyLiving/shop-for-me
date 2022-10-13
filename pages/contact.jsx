// import Footer from '../components/Footer';
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

      {/* <div className="min-h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
        <h3 className="text-3xl mb-5">Add Post</h3>
        <form
          className="border-2 max-w-xl w-full p-5 rounded space-y-3 bg-slate-50"
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label htmlFor="title" className="block text-xl">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-xl">
              Body
            </label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              className="border w-full p-1 outline-none mt-2"
              onChange={handleChange}
            ></textarea>
            <div>
              <input
                type="file"
                name="image"
                id="image"
                className="mt-3"
                onChange={(e) => setData({ ...data, image: e.target.files[0] })}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="border border-cyan-500 px-7 py-2 rounded-md
         text-cyan-500 hover:bg-cyan-700 hover:text-white duration-500 mt-2"
              >
                Add Post
              </button>
            </div>
          </div>
        </form>
      </div> */}

      <Foot />
    </>
  );
};

export default Contact;
