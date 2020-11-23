const getCocktailInfo = ()=>{

  const cocktail = document.getElementById('typedCocktail').value
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then((cocktails)=>{
      console.log(cocktails.data.drinks)
      const divName = document.getElementById('strDrink')
      divName.innerHTML = ""
      cocktails.data.drinks.forEach(cocktail => {
        const name = document.createElement('p')
        const instructions = document.createElement('p')
        const photo = document.createElement('p')
        
        name.innerText = cocktail.strDrink
        instructions.innerText = cocktail.strInstructions
        photo.innerHTML = `<img class="img-fluid" src=${cocktail.strDrinkThumb} alt=${strDrink} width></img>`
        
        
        divName.append(name)
        divName.append(instructions)
        divName.append(photo)

      })
    })
    .catch((err)=>{
      console.log(err)
    })
}