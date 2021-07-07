
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'tortilla chips' },
        {name: 'salsa'},
        {name: 'raman noodle pack'},
        {name: 'water'},
        {name: 'bread'},
        {name: 'butter'},
        {name: 'cheese'}
      ]);
    };
