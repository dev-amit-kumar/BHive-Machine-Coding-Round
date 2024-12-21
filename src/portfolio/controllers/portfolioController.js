import PortfolioService from '../services/portfolioService.js';

class PortfolioController {
  // get user portfolio
  static async getPortfolio(req, res) {
    try {
      const userId = req?.user?.id; // Assuming JWT middleware has added user to req
      console.log({ userId });
      if (!userId) {
        return res.status(401).json({ error: 'user not authenticated' });
      }
      const portfolio = await PortfolioService.getPortfolio(userId);
      res.status(200).json({ portfolio });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // add mutual fund to user portfolio
  static async addPortfolio(req, res) {
    try {
      const userId = req?.user?.id; // Assuming JWT middleware has added user to req
      if (!userId) {
        return res.status(401).json({ error: 'user not authenticated' });
      }
      const data = req.body;
      await PortfolioService.addInvestment(userId, data);
      res.status(200).json({ message: 'Successfully added portfolio' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default PortfolioController;
