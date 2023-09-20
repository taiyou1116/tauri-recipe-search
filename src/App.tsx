import { useState } from "react";
import { useStore } from "./store/store";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeListComponent from "./components/RecipeList";

export default function App() {

  const [categoryName, setCategoryName] = useState("");

  const recipeList = useStore((store) => store.recipeList);
  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const selectedRecipe = useStore((store) => store.selectedRecipe);
  const onSelectRecipe = useStore((store) => store.selectRecipe);

  return (
    <div>
      <NavigationbarComponent
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        onGetRecipeData={onGetRecipeData}
      />

      <RecipeListComponent 
        recipeList={recipeList}
        selectedRecipe={selectedRecipe}
        selectRecipe={onSelectRecipe}
      />
    </div>
  )
}
