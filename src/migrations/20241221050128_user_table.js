import knex from 'knex';

export async function up(knex){
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex){
    await knex.schema.dropTable('users');
}
