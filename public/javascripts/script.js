// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

document.addEventListener('DOMContentLoaded', () => {

  const URL = ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

  const infoFromCountries = axios.create({
    baseURL: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  })
  
  const getCocktailInfo = ()=>{
  
    const cocktail = document.getElementById('typedCocktail').value
  
    infoFromCocktails.get(cocktail)
      .then((result)=>{
        const name = document.getElementById('name')
  
        name.innerText = result.data[0].name
        
      })
      .catch((err)=>{
        console.log(err)
      })
  }
    

}