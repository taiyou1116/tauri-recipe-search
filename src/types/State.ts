import { Recipe } from "./Recipe";

export type State = {
    recipeList: Recipe[];
    getRecipeList: (categoryName: string) => void,
    selectRecipe: () => void,
}