# Homemade Cookbook

Homemade Cookbook is an application that allows the user to create and save their own recipes for later use.

When the application loads, you can go to NavBar to access different components depending on what the user wants to accomplish.

In the "My Ingredients" component, enter all the ingredietns you currently have on hand. This allows you to see which ingriedients are available to you already when looking at a certain recipe. The user can filter through the ingredients by using the 'search by name input' or the 'category filter' input.

In the "Create Recipe" component, enter all the information necessary for each input field.  Once you click the 'Submit Recipe!' button, the recipe will be saved and you can see the recipe in the "My Recipes" component.

In the My Recipes component, you will see a simple preveiw of each recipe you have created with a 'see details' link attached, which allows you to see the recipe in full detail. The user can utilize the 'search by name input' or the 'type filter' input to refine the results.

When viewing the detailed recipe, you can make adjustments to the recipe by clicking the 'edit recipe' link.

## Usage

To prepare the app:

### `json-server --watch db.json --port 3000`

Starts up the db.json file acting as an api.

### `npm start`

Runs the app in the development mode.
Open http://localhost:3001 to view it in your browser.

Enjoy!


## Future Updates

In the future, it would be nice to add a link to purchase all ingredients missing from a recipe by linking the application to some kind of online grocery delivery service.  'Add all missing ingredients to cart' 