import { useState } from "react";
import { useStore } from "./store/store";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeListComponent from "./components/RecipeList";

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

      <RecipeListComponent 
        recipeList={recipeList}
      />
    </div>
  )
}
