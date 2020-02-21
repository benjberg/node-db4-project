exports.seed = function(knex) {

  return knex('recipes').insert([
    { title: 'cup of water' },
    { title: 'bowl of soup' },
    { title: 'bowl of pasta' },
  ]);

};
