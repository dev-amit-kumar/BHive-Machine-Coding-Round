import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ error: 'Access denied. No token provided.' });
    }else{
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
            console.log({decoded});
            req.user = { id: decoded.userId };
            next(); // Pass control to the next middleware or route handler
        } catch (error) {
            res.status(400).json({ error: 'Invalid token' });
        }
    }
};

export default authMiddleware;
