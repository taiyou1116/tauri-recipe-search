import { Recipe } from "../types/Recipe";

export type State = {
    recipeList: Recipe[];
    getRecipeList: () => void,
    selectRecipe: () => void,
}