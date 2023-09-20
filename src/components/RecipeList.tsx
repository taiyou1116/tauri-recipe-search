
import RecipeComponent from "./Recipe";
import { Recipe } from "../types/Recipe";

type RecipeListProps = {
    recipeList: Recipe[];
}

export default function RecipeListComponent(props: RecipeListProps) {
    const { recipeList } = props;

  return (
    <div>
      { recipeList.map((recipe) => (
        <RecipeComponent key={recipe.recipeId}
          recipeTitle={ recipe.recipeTitle }
          recipeImg={ recipe.foodImageUrl }
        />
      ))}
    </div>
  )  
}