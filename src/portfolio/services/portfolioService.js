import { getPortfolioModel, addInvestmentModel } from '../models/portfolioModel.js';

class PortfolioService {
    static async getPortfolio(userId) {
        return await getPortfolioModel(userId);
    }

    static async addInvestment(userId, investmentData) {
        return await addInvestmentModel(userId, investmentData);
    }
}

export default PortfolioService;
