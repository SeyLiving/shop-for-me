import db from "../../../lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "../../../models/user";

async function handler(req, res) {
    if (req.method !== "POST"){
        return;
    }

    const { firstName, lastName, email, password, location, telephone, } = req.body;

    await db.connect();

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        res.status(409).json ({ error: "Email already in use" });
        await db.disconnect();
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        location,
        telephone,
    })


    res.status(201).json({ user });
}

export default handler;