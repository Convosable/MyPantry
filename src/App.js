import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';
import CreateRecipe from './CreateRecipe';
import MyIngredients from './MyIngredients';
import RecipeDetail from './RecipeDetail';
import EditRecipe from './EditRecipe';
import { Route, Switch } from "react-router-dom"


function App() {

  const [ingredientsList, setIngredientsList] = useState([])

  const [recipesList, setRecipesList] = useState([])


  const ingredientsData = `http://localhost:3000/ingredients`
  const recipesData = `http://localhost:3000/recipes`

  useEffect(() => {
    fetch(ingredientsData)
    .then(r=>r.json())
    .then(ingredients => {
      const abc = ingredients.sort(function(a,b) {
        return a.name.localeCompare(b.name);
      })
      setIngredientsList(abc)
    })
  },[]);

  useEffect(() => {
    fetch(recipesData)
    .then(r=>r.json())
    .then(recipes => setRecipesList(recipes))
  },[])

  // function handleAddIngredient(ingredient) {
  //   const alreadyExists = ingredientsList.some(i => ingredient.name === i.name)
  //   if (alreadyExists) {
  //     alert("Ingredient already exists...")
  //   } else {
  //     setIngredientsList([...ingredientsList, ingredient])
  //   }
  // }
  
  function handleAddIngredient(ingredient) {
    setIngredientsList([...ingredientsList, ingredient])
  }

  function handleRecipeSubmit(recipe) {
    setRecipesList([...recipesList, recipe])
}
  // still need to stop the ingriedient from being added to the list on handleAddIngredient (check the POST request)
  // add delete ingredient button

  function deleteRecipe(recipe) {
    const deleted = recipesList.filter(rec => rec.id !== recipe.id)
    setRecipesList(deleted)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/myrecipes/:id/editrecipe">
          <EditRecipe />
        </Route>
        <Route exact path = "/myrecipes/:id">
          <RecipeDetail ingredientsList = {ingredientsList} deleteRecipe = {deleteRecipe}/>
        </Route>
        <Route exact path = "/myrecipes">
          <MyRecipes recipesList = {recipesList}/>
        </Route>
        <Route exact path = "/myingredients">
          <MyIngredients ingredientsList = {ingredientsList} handleAddIngredient = {handleAddIngredient}/>
        </Route>
        <Route exact path = "/createrecipe">
          <CreateRecipe handleRecipeSubmit = {handleRecipeSubmit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//App
    //Home
    //NavBar
    //MyPantry
    //MyRecipes
              //Recipe Card
    //RecipeDetail
    //CreateRecipe
