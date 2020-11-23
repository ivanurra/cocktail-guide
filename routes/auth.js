// VARIABLES

const express     = require('express');
const router      = express.Router();
const bcrypt      = require("bcrypt");
const passport    = require('passport')
const ensureLogin = require('connect-ensure-login')

const User        = require('../models/User.js')
const Cocktail    = require('../models/Cocktail.js')

// ROUTES

// OUR COCKTAILS

router.get('/cocktails', (req, res)=>{
  res.render('cocktails')
})

// LOG-OUT

router.get('/logout', (req, res)=>{
  req.logout()
  res.redirect('/')
})

// SIGN-UP

router.get('/signup', (req, res, next) => {
  res.render('signup');
})

router.post('/signup', (req, res)=>{

  const {username, password} = req.body

  if(username === '' || password === ''){
    res.render('signup', {errorMessage: 'You have to fill all the fields'})
    return
  }

  User.findOne({username})
    .then((result)=>{
      if(!result){
        bcrypt.hash(password, 10)
          .then((hashedPassword)=>{
            User.create({username, password: hashedPassword})
              .then(()=>res.redirect('/'))
          })       
      } else {
        res.render('signup', {errorMessage: 'This user already exists. Please, try again'})
      }
    })
    .catch((err)=>res.send(err)) 
})

// LOG-IN

router.get('/login', (req, res)=>{
  res.render('login', {errorMessage: req.flash('error')})
})

router.post('/login', passport.authenticate("local", {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true
}))

// CHECK FOR AUTH

const checkForAuthentification = (req, res, next)=>{
  if(req.isAuthenticated()){
    return next()
  } else {
    res.redirect('login')
  }
} 

// YOUR COCKTAILS - ROUTES

// GET COCKTAILS

router.get('/yourcocktails', checkForAuthentification, (req, res)=>{

  Cocktail.find({owner: req.user._id})
    .then((result)=>{
      res.render('recipes/myRecipes', {cocktail: result})
    })
    .catch((err)=>{
      res.send(err)
    })
})

// CREATE RECIPE

router.get('/create-recipe', checkForAuthentification, (req, res)=>{
  res.render('recipes/createRecipe')
})

// POST COCKTAILS

router.post('/yourcocktails', (req, res)=>{
  const {author, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, instructions} = req.body
  const id = req.user._id

  Cocktail.create({author, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, instructions, owner: id})
    .then(() => res.redirect('/yourcocktails'))
    .catch((err) => res.send(err))
})

// DELETE RECIPE
// findByIdAndRemove

router.post('/:id/delete', checkForAuthentification, (req, res, next) => {
      const cocktailID = req.params.id

      Cocktail.findByIdAndDelete(cocktailID)
          .then(result => {
              if(result.owner.toString() == req.user._id.toString()){
              console.log(result)
              res.redirect('/yourcocktails')
          } else {
              res.redirect('/')}
          })
          .catch((error)=>{
              console.log(error)
              next(error)
          })
})

// EDIT RECIPE

router.get('/:id/edit', checkForAuthentification, (req, res, next) => {

  const cocktailID = req.params.id

  Cocktail.findById(cocktailID)
  .then(cocktail => {
    if(cocktail.owner.toString() == req.user._id.toString()){
      res.render('recipes/edit', cocktail)
    } else {
      res.redirect('/')        
    }
  })
  .catch((error)=>{
      console.log(error)
      res.send(error)
  })
})

// SEE ALL-RECIPES

router.get('/all-recipes', (req, res)=>{
  Cocktail.find({})
    .then((result)=>{
      res.render('recipes/allRecipes', {cocktail: result})
    })
    .catch((err)=>{
      res.send(err)
    })
})

// COCKTAIL ID

router.get('/:id', (req, res)=>{
  const id = req.params.id
  
  Cocktail.findOne({_id: id})
    .then((result)=>{
      if(result.owner.toString() == req.user._id.toString()){
        res.render('recipes/myRecipes')
      } else {
        res.redirect('/')        
      }
    })
})

router.post('/:id', (req, res, next) => {

  const cocktailID = req.params.id
  Cocktail.findByIdAndUpdate(cocktailID, req.body)

  .then(result => {
      console.log(result)
      res.redirect('/yourcocktails')
  })
  .catch((error)=>{
      console.log(error)
      res.send(error)
  })
})

module.exports = router
