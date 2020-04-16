const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getById
}

function getRecipes() {
    return db('recipies');
}

function getShoppingList(recipie_id) {
    return db('recipie_ingredients')
    .join('ingredients', 'recipie_ingredients.ingredient_id', '=', 'ingredients.id').select('name', 'quantity', 'unit')
    .where({recipie_id}).orderBy('name')
}

function getInstructions(recipie_id) {
return db('recipie_steps').select('step', 'instructions')
.where({ recipie_id }).orderBy('step')
}

function getById(id) {
    return db('recipies').where({id}).first();
}