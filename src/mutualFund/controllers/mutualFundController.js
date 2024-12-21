import MutualFundService from '../services/mutualFundService.js';

export const getFunds = async (req, res) => {
    try {
        const funds = await MutualFundService.getMutualFundsByFamily(req.query.family);
        res.json({ funds });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch mutual funds' });
    }
};
