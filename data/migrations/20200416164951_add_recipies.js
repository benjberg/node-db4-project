
exports.up = function(knex) {
  return knex.schema.createTable('recipies', tbl =>{
    tbl.increments('id');
    tbl.string('title', 250).notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 250).notNullable();
  })
  .createTable('recipie_ingredients', tbl =>{
      tbl.increments('id');
      tbl.integer('recipie_id').unsigned().notNullable()
      .references('id').inTable('recipies');
      tbl.integer('ingredient_id').unsigned().notNullable()
      .references('id').inTable('ingredients');
      tbl.float('quantity');
      tbl.string('unit', 250);
      
  })
  .createTable('recipie_steps', tbl => {
      tbl.increments('id');
      tbl.integer("recipe_id").unsigned().notNullable()
      .references("id").inTable("recipes");
      tbl.integer('step').unsigned().notNullable();
      tbl.string('instructions', 250);
           

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredient").dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
