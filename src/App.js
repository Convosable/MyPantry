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

  function handleAddIngredient(ingredient) {
    setIngredientsList([...ingredientsList, ingredient])
  }

  function handleDeleteIngredient(ingredient){
    const deleted = ingredientsList.filter(ingr => ingr.id !== ingredient.id)
    setIngredientsList(deleted)
  }

  function handleRecipeSubmit(recipe) {
    setRecipesList([...recipesList, recipe])
  }
 

  function deleteRecipe(recipe) {
    const deleted = recipesList.filter(rec => rec.id !== recipe.id)
    setRecipesList(deleted)
  }

  function handleUpdateRecipe(recipe) {
    const updatedRecipe = recipesList.map(rec => (rec.id === recipe.id ? recipe : rec));
    setRecipesList(updatedRecipe)
  }


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/myrecipes/:id/edit">
          <EditRecipe handleUpdateRecipe = {handleUpdateRecipe}/>
        </Route>
        <Route exact path = "/myrecipes/:id">
          <RecipeDetail ingredientsList = {ingredientsList} deleteRecipe = {deleteRecipe}/>
        </Route>
        <Route exact path = "/myrecipes">
          <MyRecipes recipesList = {recipesList}/>
        </Route>
        <Route exact path = "/myingredients">
          <MyIngredients handleDeleteIngredient = {handleDeleteIngredient} ingredientsList = {ingredientsList} handleAddIngredient = {handleAddIngredient}/>
        </Route>
        <Route exact path = "/createrecipe">
          <CreateRecipe handleRecipeSubmit = {handleRecipeSubmit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
