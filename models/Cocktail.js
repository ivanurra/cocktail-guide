const mongoose  = require ("mongoose")
const Schema = mongoose.Schema

const cocktailSchema = new Schema({
    name: {type: String, required: true},
    ingredients: {type: String, required: true},
    recipe: {type: String, required: true},
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = Cocktail