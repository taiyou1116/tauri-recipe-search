import { useEffect, useState } from "react";
import { useStore } from "./store/store";
import { listen } from "@tauri-apps/api/event";
import { Toaster } from "react-hot-toast";

import NavigationbarComponent from "./components/Navigationbar";
import RecipeListComponent from "./components/RecipeList";
import { Recipe } from "./types/Recipe";

export default function App() {

  const [categoryName, setCategoryName] = useState("");
  const [materialName, setMaterialName] = useState("");

  const showRecipeList = useStore((store) => store.showRecipeList);
  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const onGetDataMatchingMaterial = useStore((store) => store.GetDataMatchingMaterial);
  const selectedRecipe = useStore((store) => store.selectedRecipe);
  const onSelectRecipe = useStore((store) => store.selectRecipe);

  useEffect(() => {
    let already_unmounted = false; // マウントされた瞬間にアンマウントされる場合があるため用意
    let unlisten: () => void = () => {};
    
    (async () => {
      const unlsn = await listen<Recipe[]>(
        "receive_recipes",
        (event) => {
          let recipes = event.payload;
          useStore.setState((state) => ({
            recipeList: [...state.recipeList, ...recipes],
          }));
          // materialの素材に合うものを表示
          onGetDataMatchingMaterial(materialName);
        });
    
      if (already_unmounted) {
        unlsn();
      } else {
        unlisten = unlsn;
      }
    })();
    
    // クリーンアップ関数：コンポーネントのアンマウント時に実行
    return () => {
  
      already_unmounted = true;
    
      // イベントリッスン終了
      unlisten();
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

      {/* どのように通知を出すか */}
      <Toaster
        position="top-left"
        toastOptions={{
          className:'bg-gray-50 dark:bg-slate-600 dark:text-white rounded-md shadow-md'
        }}
      />
    </div>
  )
}
