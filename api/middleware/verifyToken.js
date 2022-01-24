import jwt from 'jsonwebtoken'
import { users } from '../config/users.js'

export default function verifyToken(req, res, next) {
    try {
        let token = req.headers['authorization'];
        token = token.substring(7, token.length);
        if (!token) return res.status(403).json({ message: 'No token provided' });

        const decoded = jwt.verify(token, process.env.SECRET);
        const user = users.find(user => user.username === decoded.username);
        if (!user) return res.status(403).json({ message: 'No user found' });

        res.locals.username = user.username;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Unauthorized" });
    }
}