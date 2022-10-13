import axios from "axios";

export const getProducts = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
  );
  const products = await res.data.products;

  if (id) {
    const product = products.find((product) => product._id == id);
    return product;
  }
  return products;
};
