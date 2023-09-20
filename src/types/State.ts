import { Recipe } from "./Recipe";

export type State = {
    recipeList: Recipe[];
    getRecipeList: (categoryName: string) => void,
    selectedRecipe: Recipe | null,
    selectRecipe: (recipe: Recipe) => void,
}