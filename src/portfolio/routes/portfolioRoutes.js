import { Router } from 'express';
import PortfolioController from '../controllers/portfolioController.js';

const router = Router();

router.get('/', PortfolioController.getPortfolio); // Get portfolio
router.post('/add', PortfolioController.addPortfolio); // Add new portfolio

export default router;
