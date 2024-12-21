import axios from 'axios';

const RAPIDAPI_URL = 'https://latest-mutual-fund-nav.p.rapidapi.com/master?RTA_Agent_Code=CAMS?';
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

class MutualFundService {
    static async getMutualFundsByFamily(familyName) {
        try {
            const response = await axios.get(`${RAPIDAPI_URL}`, {
                headers: {
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'latest-mutual-fund-nav.p.rapidapi.com',
                },
                params: {
                    "Scheme_Name": familyName,
                    "Scheme_Type": "Open"
                },
            });

            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch mutual fund data');
        }
    }
}

export default MutualFundService;
