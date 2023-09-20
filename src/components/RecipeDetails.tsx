import { Recipe } from "../types/Recipe";

type RecipeDetailsProps = {
  recipe: Recipe | null,
}

export default function RecipeDetailsComponent(props: RecipeDetailsProps) {
    const { recipe } = props;

    return(
      <div>
        <h1>{ recipe?.recipeTitle }</h1>
        <p>{ recipe?.recipeMaterial }</p>
      </div>
    )
}