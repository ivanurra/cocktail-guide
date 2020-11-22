// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

// index.js

// cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + mainAlcohol;
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

// const infoFromCocktails = axios.create({
//   baseURL: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
// })

// const getCocktailInfo = ()=>{

//   const cocktail = document.getElementById('typedCocktail').value
//   console.log(cocktail)
//   infoFromCocktails
//     .get(cocktail)
//     .then((result)=>{
//       console.log(result.data.drinks)
//       const name = document.getElementById('strDrink')
//       name.innerText = result.data[0].name
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
// }

const getCocktailInfo = ()=>{

  const cocktail = document.getElementById('typedCocktail').value
  // console.log(cocktail)
  // infoFromCocktails
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
        photo.innerText = cocktail.strDrinkThumb
        divName.append(name)
        divName.append(instructions)
        divName.append(photo)
      });
    })
    .catch((err)=>{
      console.log(err)
    })
}