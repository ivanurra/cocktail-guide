// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

// index.js

// cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + mainAlcohol;
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

const infoFromCocktails = axios.create({
  baseURL: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
})

const getCocktailInfo = ()=>{

  const cocktail = document.getElementById('typedCocktail').value

  infoFromCocktails.get(cocktail)
    .then((result)=>{
      const name = document.getElementById('strDrink')

      name.innerText = result.data[0].name
      
    })
    .catch((err)=>{
      console.log(err)
    })
}