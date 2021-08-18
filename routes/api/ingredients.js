const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Ingredient = require('../../models/Ingredient');
// const validText = require('./valid-text');
// import and define validations

router.get('/', (req, res) => {
  Ingredient.find({}).then(list => res.json(list));
})

router.get('/:id', (req, res) => {
  Ingredient.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => 
      res.status(401).json({ noIngredientFound: "No ingredient found with that ID"})
      );
});

router.post('/create', (req, res) => {
  let newIngredient = new Ingredient({
    name: req.body.name,
    aisle: req.body.aisle,
    imageUrl: req.body.imageUrl,
    nutrition: req.body.nutrition,
    category: req.body.category
  });
  newIngredient.save().then(ingredient => {
    res.json(ingredient)
})})
module.exports = router;