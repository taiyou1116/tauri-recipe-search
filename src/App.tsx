import { useState } from "react";
import { useStore } from "./store/store";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeListComponent from "./components/RecipeList";

// 独自のWindowインターフェイスを定義する
interface MyWindow extends Window {
  receiveRecipes: (recipes: any) => void;
}

// グローバルなwindowオブジェクトを上書きする
declare let window: MyWindow;

export default function App() {

  const [categoryName, setCategoryName] = useState("");

  const recipeList = useStore((store) => store.recipeList);
  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const selectedRecipe = useStore((store) => store.selectedRecipe);
  const onSelectRecipe = useStore((store) => store.selectRecipe);

  window.receiveRecipes = function(recipes) {
    console.log("Received recipes:", recipes);
    // 受け取ったレシピを何らかの処理する
  };

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
