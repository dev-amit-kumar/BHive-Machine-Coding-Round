import dotenv from 'dotenv';

dotenv.config();

const Config = {
    db: {
        user: process.env.DB_USER || '',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || '',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    },
    jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
    rapidApiKey: process.env.RAPIDAPI_KEY || '',
};

const Test = {
    db: {
        user: process.env.DB_USER || '',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || '',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    },
    jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
    rapidApiKey: process.env.RAPIDAPI_KEY || '',
};

export default (function () {
    console.log(`Env = ${process.env.NODE_ENV}`);
    switch (process.env.NODE_ENV) {
        case 'Test':
            return Test;
        default:
            return Config;
    }
})();
