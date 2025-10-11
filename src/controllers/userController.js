import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        if (!name || !email|| !password) {
            return res.status(400).json({ message: 'vui long nhap day du thong tin' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email da duoc dang ky' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        const { password: _, ...userWithoutPassword } = newUser.toObject();

        res.status(201).json({
            message: 'Dang ky thanh cong',
            user: userWithoutPassword,
        });
    } catch (error) {
        res.status(500).json({ message: 'Loi server', error: error.message    
        })
    }
};