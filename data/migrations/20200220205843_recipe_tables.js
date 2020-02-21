
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
        table.increments();

        table.string("title", 128)
            .notNullable();
    })
    .createTable("ingredients", table => {
        table.increments();

        table.string("name", 128)
            .notNullable();
    })
    .createTable("recipe_ingredients", table => {
        table.increments();

        table.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");

        table.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        
        table.float("quantity")
        
        table.string("unit", 32)
            
        // table.unique(["recipe_id", "ingredient_id"]);
    })
    .createTable("recipe_steps", table => {
        table.increments();

        table.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        
        table.integer("step")
            .unsigned()
            .notNullable();
        
        table.string("instructions")
            
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
