import MutualFundService from '../services/mutualFundService.js';

class mutualFundController {
  static async getFunds(req, res) {
    try {
      const funds = await MutualFundService.getMutualFundsByFamily(
        req.query.AMC_Code,
      );
      res.json({ funds });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch mutual funds' });
    }
  }

  static async getFamilies(req, res) {
    try {
      const familyList = await MutualFundService.getMutualFundsFamilyList();
      res.json({ familyList });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch mutual funds' });
    }
  }
}

export default mutualFundController;
