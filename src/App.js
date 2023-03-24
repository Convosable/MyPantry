import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';
import CreateRecipe from './CreateRecipe';
import MyPantry from './MyPantry';
import { Route, Switch } from "react-router-dom"


function App() {

  const [ingredientsList, setIngredientsList] = useState([])
  const [myIngredientsList, setMyIngredientsList] = useState([])
  const [ingredientIsActive, setIngredientIsActive] = useState(false);


  const ingredientsData = `http://localhost:3000/ingredients`
  // const recipesData = `http://localhost:3000/recipe`

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


  function handleIngredientChange(ingredient) {
    if (myIngredientsList.includes(ingredient)){
      const removeIngredient = myIngredientsList.filter(i => i.id !== ingredient.id)
      setMyIngredientsList(removeIngredient)
    } else {
      setMyIngredientsList([...myIngredientsList, ingredient])
    }
  }

  function handleAddIngredient(ingredient) {
    setIngredientsList([...ingredientsList, ingredient])
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/myrecipes">
          <MyRecipes />
        </Route>
        <Route exact path = "/mypantry">
          <MyPantry myIngredientsList = {myIngredientsList} handleIngredientChange = {handleIngredientChange} ingredientsList = {ingredientsList} ingredientIsActive = {ingredientIsActive} handleAddIngredient = {handleAddIngredient}/>
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
