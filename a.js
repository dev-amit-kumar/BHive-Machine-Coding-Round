import fs from 'fs';

// Path to your JSON file
const filePath = './response.json';

// Function to extract AMC_Code values
const getAMCCodeList = async () => {
    try {
        // Read the file asynchronously
        const data = await fs.promises.readFile(filePath, 'utf8');

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        const amcCodes = []
        // Extract the AMC_Code values
        jsonData.forEach(item => {
            if (!amcCodes.includes(item.AMC_Code)){
                amcCodes.push(item.AMC_Code)
            }
        });

        console.log('AMC Codes:', amcCodes);
        return amcCodes;
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
    }
};

// Call the function
getAMCCodeList();
