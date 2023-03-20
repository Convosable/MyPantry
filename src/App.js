import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';
import CreateRecipe from './CreateRecipe';
import MyPantry from './MyPantry';
import { Route, Switch } from "react-router-dom"

function App() {

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
          <MyPantry />
        </Route>
        <Route exact path = "/createrecipe">
          <CreateRecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
