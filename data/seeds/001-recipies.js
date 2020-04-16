
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
    
      // Inserts seed entries
      return knex('recipies').insert([
        {title: 'chips n salsa'},
        {title: 'roman noodles'},
        {title: 'grilled cheese'}
      ]);
    };

