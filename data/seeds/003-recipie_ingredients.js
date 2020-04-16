
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('recipie_ingredients').insert([
        {recipie_id: 1, ingredient_id: 1, quantity: 1, unit: 'bag'},
        {recipie_id: 1, ingredient_id: 2, quantity: 1, unit: 'jar'},
        {recipie_id: 2, ingredient_id: 3, quantity: 1, unit: 'packet'},
        {recipie_id: 2, ingredient_id: 4, quantity: 1, unit: 'cup'},
        {recipie_id: 3, ingredient_id: 5, quantity: 2, unit: 'pieces'},
        {recipie_id: 3, ingredient_id: 6, quantity: 1, unit: 'teaspoon'},
        {recipie_id: 3, ingredient_id: 7, quantity: 3, unit: 'slices'}
      ]);
    }
