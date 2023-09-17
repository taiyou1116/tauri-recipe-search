import { Recipe } from "./Recipe";

export type State = {
    recipeList: Recipe[];
    getRecipeList: () => void,
    selectRecipe: () => void,
}