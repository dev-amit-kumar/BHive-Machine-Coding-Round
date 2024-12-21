import express from 'express';
import { router as authRoutes, authMiddleware } from './auth/index.js';
import { router as mutualFundRoutes } from './mutualFund/index.js';
import { router as portfolioRoutes } from './portfolio/index.js';
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/portfolio', authMiddleware, portfolioRoutes);
app.use('/mutual-fund', authMiddleware, mutualFundRoutes);
app.get('/health', (_req, res) => {
    res.status(200).json({ msg: "Health check is ok" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
