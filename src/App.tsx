import { useState } from "react";
import { useStore } from "./store/store";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeComponent from "./components/Recipe";

export default function App() {

  const [categoryName, setCategoryName] = useState("");

  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const recipeList = useStore((store) => store.recipeList);

  return (
    <div>
      <NavigationbarComponent
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        onGetRecipeData={onGetRecipeData}
      />

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
