import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Hay nhap day du thong tin" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email da duoc dang ki" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const { password: _, ...userWithoutPassword } = newUser.toObject();

        res.status(201).json({
            message: "Dang ki thanh cong",
            user: userWithoutPassword,
        });
    } catch (error) {
        res.status(500).json({ message: "Loi server", error: error.message });
    }
};


