import jwt from 'jsonwebtoken';
import { users, favs, comparePassword, encryptPassword } from '../config/users.js'

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) return res.status(403).json({ message: 'user not found' });

    const validPassword = await comparePassword(user.password, password);
    if (!validPassword) return res.status(403).json({ message: 'invalid password' });

    const token = jwt.sign({ username }, process.env.SECRET, { expiresIn: 7205 });
    res.status(200).json({ token });
}

export const register = async (req, res) => {
    const { username, password } = req.body;
    
    const exists = users.find(u => u.username === username);
    if (exists) return res.status(403).json({ message: 'username already taken' });

    const newUser = {
        username,
        password: await encryptPassword(password)
    }
    users.push(newUser);
    favs[username] = [];

    res.status(200).json({ message: 'registration confirmed' });
}