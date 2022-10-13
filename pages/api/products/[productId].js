import Product from "../../../models/product";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
    if (req.method == "GET") {
        const { productId } = req.params;

        await db.connect();
        const product = await Product.findById(productId);
        db.disconnect();

        if (!product) {
          res.status(404).json({ message: "PRODUCT not Found" });
          return;
        }
        
        res.status(200).json({ product });
    }
}   