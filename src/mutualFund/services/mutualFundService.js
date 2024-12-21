import axios from 'axios';

const RAPIDAPI_URL =
  'https://latest-mutual-fund-nav.p.rapidapi.com/master?RTA_Agent_Code=CAMS?';
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
          AMC_Code: familyName,
          Scheme_Type: 'Open',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch mutual fund data');
    }
  }

  static async getMutualFundsFamilyList() {
    // Created the list of mutual fund from the API response object.
    // Alternatively, we could use the API endpoint if available.
    const list = [
      'BirlaSunLifeMutualFund_MF',
      'HDFCMutualFund_MF',
      'ICICIPrudentialMutualFund_MF',
      'SBIMutualFund_MF',
      'TATAMutualFund_MF',
      'BANDHANMUTUALFUND_MF',
      'DSP_MF',
      'KOTAKMAHINDRAMF',
      'FRANKLINTEMPLETON',
      'HSBCMUTUALFUND_MF',
      '360_ONE_MUTUALFUND_MF',
      'NAVIMUTUALFUND_MF',
      'SHRIRAMMUTUALFUND_MF',
      'PPFAS_MF',
      'MAHINDRA MANULIFE MUTUAL FUND_MF',
      'UNIONMUTUALFUND_MF',
      'WHITEOAKCAPITALMUTUALFUND_MF',
      'HELIOSMUTUALFUND_MF',
      'ZERODHAMUTUALFUND_MF',
    ];
    return list;
  }
}

export default MutualFundService;
