import knex from 'knex';

export async function up(knex) {
  await knex.schema.createTable('portfolio', (table) => {
    table.increments('id').primary();
    table.string('userId').notNullable();
    table.string('mutualFundId').notNullable();
    table.integer('amount').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  await knex.schema.dropTable('portfolio');
}
