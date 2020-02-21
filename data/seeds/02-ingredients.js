exports.seed = function(knex) {

  return knex('ingredients').insert([
    { name: 'water' },
    { name: 'rice' },
    { name: 'pasta' },
  ]);

};
