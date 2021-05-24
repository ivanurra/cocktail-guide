// CALL TO THE API - thecocktaildb.com/api.php

const getCocktailInfo = ()=>{

  const cocktail = document.getElementById('typedCocktail').value
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then((cocktails)=>{

      const divName = document.getElementById('strDrink')
      divName.innerHTML = ""

      cocktails.data.drinks.forEach(cocktail => {
        const photo             = document.createElement('p')
        const titleName         = document.createElement('p')
        const name              = document.createElement('p')
        const titleIngredients  = document.createElement('p')
        const ingredient1       = document.createElement('p')
        const ingredient2       = document.createElement('p')
        const ingredient3       = document.createElement('p')
        const ingredient4       = document.createElement('p')
        const ingredient5       = document.createElement('p')
        const ingredient6       = document.createElement('p')
        const ingredient7       = document.createElement('p')
        const ingredient8       = document.createElement('p')
        const ingredient9       = document.createElement('p')
        const titleInstructions = document.createElement('p')
        const instructions      = document.createElement('p')
        
        photo.innerHTML             = `<img class="img-fluid" src=${cocktail.strDrinkThumb} alt=${strDrink} width></img>`
        titleName.innerHTML         = '<p class="titles">Cocktail Name:</p>'
        name.innerText              = cocktail.strDrink
        titleIngredients.innerHTML  = '<p class="titles">Ingredients:</p>'
        ingredient1.innerText       = cocktail.strIngredient1
        ingredient2.innerText       = cocktail.strIngredient2
        ingredient3.innerText       = cocktail.strIngredient3
        ingredient4.innerText       = cocktail.strIngredient4
        ingredient5.innerText       = cocktail.strIngredient5
        ingredient6.innerText       = cocktail.strIngredient6
        ingredient7.innerText       = cocktail.strIngredient7
        ingredient8.innerText       = cocktail.strIngredient8
        ingredient9.innerText       = cocktail.strIngredient9
        titleInstructions.innerHTML = '<p class="titles">Preparation:</p>'
        instructions.innerText      = cocktail.strInstructions
        
        divName.append(photo)
        divName.append(titleName)
        divName.append(name)
        divName.append(titleIngredients)
        divName.append(ingredient1)
        divName.append(ingredient2)
        divName.append(ingredient3)
        divName.append(ingredient4)
        divName.append(ingredient5)
        divName.append(ingredient6)
        divName.append(ingredient7)
        divName.append(ingredient8)
        divName.append(ingredient9)
        divName.append(titleInstructions)
        divName.append(instructions)
      })
    })
    .catch((err)=>{
      console.log(err)
    })
}