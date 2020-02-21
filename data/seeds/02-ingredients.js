exports.seed = function(knex) {

  return knex('ingredients').insert([
    { title: 'water' },
    { title: 'rice' },
    { title: 'pasta' },
  ]);

};
