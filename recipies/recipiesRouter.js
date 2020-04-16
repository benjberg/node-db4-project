const express = require('express')
const db = require('./recipies.model.js');

const router = express.Router();

router.get('/', (req,res) => {
    db.getRecipes().then(recipies =>{
        res.status(200).json(recipies)
    }).catch(err =>{
        res.status(500).json({message: 'an error has occurred'})
    })
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    db.getById(id)
    .then(recipie => {
      if (recipie) {
        res.json(recipie);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
})

router.get('/:id/ingredients', (req,res) => {
   
    db.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get recipe ingredients."})
        })
})

router.get('/:id/steps', (req,res) => {
     db.getInstructions(req.params.id).then(instructions => {
        res.status(200).json(instructions)
    }).catch(err =>{
        res.status(500).json({message: 'an error has occurred'})}
    )
})

module.exports = router;