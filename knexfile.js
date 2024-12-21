import env from "./src/config/env.js"

const config = {
    client: 'pg',
    connection: {
        host: env.db.host,
        user: env.db.user,
        password: env.db.password,
        database: env.db.database,
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        directory: './src/migrations',
        extension: 'js',
        tableName: 'knex_migrations',
    },
    seeds: {
        directory: './src/seeds',
        extension: 'js',
    },
};

export default config;
