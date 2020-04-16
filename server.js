const express = require('express');
const recipeRouter = require('./recipies/recipiesRouter.js');

const server = express();
server.use(express.json());
server.use('/api/recipies', recipeRouter);

server.get('/', (req, res) =>{
    res.status(200).json({message: 'server is up'})
});

module.exports = server;
