import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import { v4 as uuid } from "uuid";

const initialState = {
  item: "",
  price: 0,
  quantity: 0,
};

const shopItems = [
  { id: 1, name: "Milo", price: 22 },
  { id: 2, name: "Colgate Tooth Paste", price: 10 },
  { id: 3, name: "Paree Sanitary Pad", price: 15 },
  { id: 4, name: "Geisha Soap", price: 9 },
  { id: 5, name: "Indomie Noodles", price: 5 },
  { id: 6, name: "Yazz Washing Powder", price: 80 },
  { id: 7, name: "Lovelyn Body Splash", price: 20 },
  { id: 8, name: "Nestle Nido", price: 30 },
  { id: 9, name: "South African Wine", price: 20 },
  { id: 10, name: "Classic Basmati Rice", price: 25 },
  { id: 11, name: "Frytol Cooking Oil", price: 20 },
  { id: 12, name: "Cream Crackers Biscuit", price: 10 },
];

const AddProduct = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState(initialState);

  const handleChange = (e) => {
    setSingleItem({ ...singleItem, [e.target.name]: e.target.value });
  };

  const setPrice =
    singleItem.item &&
    shopItems.find((item) => item.name === singleItem.item).price;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      ...singleItem,
      price: setPrice,
    };

    setItems([...items, newItem]);
    setSingleItem(initialState);
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-400/30 flex flex-col justify-center items-center mb-40">
        <div className="bg-slate-400 w-full p-10 max-w-2xl mt-40 mb-5 rounded-md">
          <form className="space-y-3 mb-5" onSubmit={handleSubmit}>
            <label
              htmlFor="item"
              className=" text-lg font-medium text-gray-900 dark:text-gray-700"
            >
              Items / Products
            </label>
            <select
              id="item"
              name="item"
              class="bg-gray-50 border border-gray-300 text-gray-500 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={singleItem.item}
              onChange={handleChange}
            >
              <option selected="">select</option>
              <option value="Milo">Milo</option>
              <option value="Colgate Tooth Paste">Colgate Toothpaste</option>
              <option value="Paree Sanitary Pad">Paree Sanitray Pad</option>
              <option value="Geisha Soap">Geisha Soap</option>
              <option value="Indomie Noodles">Indomie Noodles</option>
              <option value="Yazz Washing Powder">Yazz Washing Powder</option>
              <option value="Lovelyn Body Splash"> Lovelyn Body Splash</option>
              <option value="Nestle Nido">Nestle Nido</option>
              <option value="South African Wine">South African Wine</option>
              <option value="Classic Basmati Rice">Classic Basmati Rice</option>
              <option value="Frytol Cooking Oil">Frytol Cooking Oil</option>
              <option value="Cream Crackers Biscuit">
                Cream Crackers Biscuit
              </option>
            </select>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full">
                <label className="block text-md" htmlFor="price">
                  Price
                </label>
                <input
                  className="border flex-1 p-2 w-full"
                  type="number"
                  name="price"
                  id="price"
                  value={setPrice}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <div className="w-full">
                <label className="block text-md" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  className="border flex-1 p-2 w-full"
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={singleItem.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="border px-5 py-2 rounded font-bold" type="submit">
                Add Item
              </button>
            </div>
          </form>

          <div className="space-y-1">
            <div className="bg-gray-500 text-white grid md:grid-cols-12 p-2 font-semibold rounded">
              <div className="md:col-span-1">#SN</div>
              <div className="md:col-span-7">Items</div>
              <div className="md:col-span-2">Qty</div>
              <div className="md:col-span-2">Price</div>
            </div>
            {items.length === 0 ? (
              <p className="text-center py-3 font-semibold">Submit List</p>
            ) : (
              <>
                {items.map((item, idx) => (
                  <div
                    className="bg-gray-200 grid md:grid-cols-12 p-2 rounded"
                    key={item.id}
                  >
                    <div className="md:col-span-1 pl-2">{idx + 1}</div>
                    <div className="md:col-span-7">{item.item}</div>
                    <div className="md:col-span-2">{item.quantity}</div>
                    <div className="md:col-span-2">GH{item.price}</div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div>
            <button className="border py-2 px-4 rounded w-full font-bold mt-5">
              Submit List
            </button>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default AddProduct;

// import axios from "axios";
// import React, { useState } from "react";
// import { useRouter } from "next/router";

// const AddProduct = () => {
//   const [data, setData] = useState({
//     item: "",
//     price: "",
//     quantity: "",
//     location: "",
//     telephone: ""
//   });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.product(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
//         {
//           data,
//         }
//       );
//       router.push("/products");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h3 className="p-5 text-blue-900 text-xl font-bold">
//         Add Product Here
//       </h3>
//       <form
//         className="bg-green-300 w-96 p-5  space-y-5 rounded-3xl"
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <label htmlFor="title" className="font-bold">
//             Title :
//           </label>
//           <input
//             className="font-medium"
//             type="text"
//             name="title"
//             id="title"
//             value={data.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="title" className="font-bold">
//             Body :
//           </label>
//           <textarea
//             name="body"
//             id="body"
//             cols="40"
//             rows="10"
//             value={data.body}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="rounded-3xl bg-pink-600 w-60 font-bold flex justify-center p-3"
//           >
//             Add Post
//           </button>
//         </div>
//       </form>
//     </div>

//   );
// };

// export default AddProduct;
