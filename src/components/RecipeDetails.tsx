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
      <div>
        <h1>{ recipe?.recipeTitle }</h1>
        <img 
          src={ recipe?.foodImageUrl } 
          alt="料理の画像"
          className="h-60 w-auto"
        />
        { recipe?.recipeMaterial.map((material) => <li>{material}</li>) }
        <button onClick={() => openExternalLink()}>作り方はこちら</button>
      </div>
    )
}