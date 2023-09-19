import { useState } from "react";
import "./App.css";
import { useStore } from "./store/store";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeComponent from "./components/Recipe";

export default function App() {

  const [categoryName, setCategoryName] = useState("");

  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const recipeList = useStore((store) => store.recipeList);

  return (
    <div>
      <NavigationbarComponent />
      <input type="text" placeholder="input category name" onChange={(name) => setCategoryName(name.target.value)}/>
      <button onClick={() => onGetRecipeData(categoryName)}/>

      { recipeList.map((recipe) => (
        <div>
          <RecipeComponent 
            recipeTitle={ recipe.recipeTitle }
            recipeImg={ recipe.foodImageUrl }
          />
        </div>
      ))}
    </div>
  )
}
