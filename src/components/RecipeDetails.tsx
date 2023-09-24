import { open } from "@tauri-apps/api/shell";

import { Recipe } from "../types/Recipe";

type RecipeDetailsProps = {
  recipe: Recipe | null,
}

export default function RecipeDetailsComponent(props: RecipeDetailsProps) {
    const { recipe } = props;

    
    const openExternalLink = () => {
      if (recipe == null) return;
      open(recipe.recipeUrl).catch((err) => {
        console.error('外部リンクを開けません:', err);
      });
    };

    return(
      <div className="m-2 flex flex-col gap-4">
        <h1 className="font-bold">{ recipe?.recipeTitle }</h1>
        <img 
          src={ recipe?.foodImageUrl } 
          alt="料理の画像"
          className="h-60 w-auto"
        />
        <ul className="list-disc pl-5">
          { recipe?.recipeMaterial.map((material) => <li>{material}</li>) }
        </ul>
        <button 
          onClick={() => openExternalLink()} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md 
                       transition-all duration-200 shadow-lg active:translate-y-1 active:shadow-none
                       flex items-center justify-center">
          作り方はこちら
        </button>
      </div>
    )
}