import { useEffect, useState } from "react";
import { useStore } from "./store/store";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeListComponent from "./components/RecipeList";

export default function App() {

  const [categoryName, setCategoryName] = useState("");
  const [materialName, setMaterialName] = useState("");

  const showRecipeList = useStore((store) => store.showRecipeList);
  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const onGetDataMatchingMaterial = useStore((store) => store.GetDataMatchingMaterial);
  const selectedRecipe = useStore((store) => store.selectedRecipe);
  const onSelectRecipe = useStore((store) => store.selectRecipe);

  useEffect(() => {
    window.receiveRecipes = function(recipes) {
      useStore.setState((state) => ({
        recipeList: [...state.recipeList, ...recipes],
      }));
      // ここで処理
      onGetDataMatchingMaterial(materialName);
    };

    // クリーンアップ関数：コンポーネントのアンマウント時に実行
    return () => {
      window.receiveRecipes = null;
    };
  }, [materialName]);

  useEffect(() => {
    onGetDataMatchingMaterial(materialName);
  }, [materialName])

  return (
    <div>
      <NavigationbarComponent
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        onGetRecipeData={onGetRecipeData}
        materialName={materialName}
        setMaterialName={setMaterialName}
      />

      <RecipeListComponent 
        showRecipeList={showRecipeList}
        selectedRecipe={selectedRecipe}
        selectRecipe={onSelectRecipe}
      />
    </div>
  )
}
