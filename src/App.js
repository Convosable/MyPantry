import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';
import CreateRecipe from './CreateRecipe';
import MyPantry from './MyPantry';
import RecipeDetail from './RecipeDetail';
import { Route, Switch } from "react-router-dom"


function App() {

  const [ingredientsList, setIngredientsList] = useState([])
  const [myIngredientsList, setMyIngredientsList] = useState([])
  const [ingredientIsActive, setIngredientIsActive] = useState(false);

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


  function handleIngredientChange(ingredient) {
    if (myIngredientsList.includes(ingredient)){
      const removeIngredient = myIngredientsList.filter(i => i.id !== ingredient.id)
      setMyIngredientsList(removeIngredient)
    } else {
      setMyIngredientsList([...myIngredientsList, ingredient])
    }
    setIngredientIsActive((ingredientIsActive) => !ingredientIsActive)
  }

  // still need to fix the add/remove button text to only apply to one paticular item as opposed to the entire list of ingr. on handleIngredientChange

  function handleAddIngredient(ingredient) {
    const alreadyExists = ingredientsList.some(i => ingredient.name === i.name)
    if (alreadyExists) {
      alert("Ingredient already exists...")
    } else {
      setIngredientsList([...ingredientsList, ingredient])
    }
  }

  // still need to stop the ingriedient from being added to the list on handleAddIngredient (check the POST request)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/myrecipes/:id">
          <RecipeDetail />
        </Route>
        <Route exact path = "/myrecipes">
          <MyRecipes recipesList = {recipesList}/>
        </Route>
        <Route exact path = "/mypantry">
          <MyPantry ingredientIsActive = {ingredientIsActive} myIngredientsList = {myIngredientsList} handleIngredientChange = {handleIngredientChange} ingredientsList = {ingredientsList} handleAddIngredient = {handleAddIngredient}/>
        </Route>
        <Route exact path = "/createrecipe">
          <CreateRecipe />
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
    //CreateRecipe
