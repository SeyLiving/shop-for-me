import Product from "../../../models/product";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method !== "GET" || req.method !== "POST") {
    res.status(405).json({ error: "only POST amd GET methods are allowed" });
  }

  if (req.method == "GET") {
    await db.connect();

    const products = await Product.find({});

    await db.disconnect();

    res.status(200).json({ products });
    return;
  } else if (req.method == "POST") {
    await db.connect();

    const { item, price, quantity, location, telephone } = req.body;

    const product = await Product.create({
      item,
      price,
      quantity,
      location,
      telephone,
    });

    await db.disconnect();

    res.status(201).json({ product });
  }
}
