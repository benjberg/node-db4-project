
exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('recipie_steps').insert([
        { recipe_id: 1, step: 1, instructions: 'pour chips into a bowl' },
        { recipe_id: 1, step: 2, instructions: 'pour salsa into another bowl and enjoy' },
        { recipe_id: 2, step: 1, instructions: 'remove noodles from package' },
        { recipe_id: 2, step: 2, instructions: 'place noodles in bowl with cup of water' },
        { recipe_id: 2, step: 3, instructions: 'microwave bowl for 3mins' },
        { recipe_id: 2, step: 4, instructions: 'let sit for 1min to cool' },
        { recipe_id: 2, step: 5, instructions: 'mix in seasoning packet and enjoy' },
        { recipe_id: 3, step: 1, instructions: 'place pan on stove at low/med heat' },
        { recipe_id: 3, step: 2, instructions: 'place cheese on bread to form sandwich' },
        { recipe_id: 3, step: 3, instructions: 'butter pan and place sandwich on pan' },
        { recipe_id: 3, step: 4, instructions: 'continue grilling sandwich on low/med heat until both sides are golden brown' },
        { recipe_id: 4, step: 5, instructions: 'cut and server sandwich' }
      ]);
    }