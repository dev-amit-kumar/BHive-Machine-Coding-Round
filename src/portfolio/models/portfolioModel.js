import db from '../../config/db.js';

export const getPortfolioModel = async (userId) => {
    return db('portfolio').where({ userId: userId });
};

export const addInvestmentModel = async (userId, investmentData) => {
    const { mutualFundId, amount } = investmentData;
    const [newInvestment] = await db('portfolio').insert(
        { 
            mutualFundId, 
            amount, 
            userId 
        }).returning('*');
    return newInvestment;
};
