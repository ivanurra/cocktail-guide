const mongoose  = require ("mongoose")
const Schema = mongoose.Schema

const cocktailSchema = new Schema({
    name: {type: String, required: true},
    ingredient1: {type: String, required: true},
    ingredient2: {type: String},
    ingredient3: {type: String},
    ingredient4: {type: String},
    ingredient5: {type: String},
    ingredient6: {type: String},
    ingredient7: {type: String},
    ingredient8: {type: String},
    ingredient9: {type: String},
    instructions: {type: String, required: true}
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = Cocktail