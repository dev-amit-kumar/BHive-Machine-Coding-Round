import { Knex } from 'knex';

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, email: 'test1@example.com', password: 'password1' },
    { id: 2, email: 'test2@example.com', password: 'password2' },
  ]);
}
