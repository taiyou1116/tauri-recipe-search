import { create } from "zustand";
import { invoke } from "@tauri-apps/api";

import { State } from "../types/State";
import { Recipe } from "../types/Recipe";
import { Result } from "../types/Result";

export const useStore = create<State>((set, get) => ({
    recipeList: [],

    getRecipeList: async (categoryName: string) => {
        set({ recipeList: [] })
        console.log(categoryName);

        const categoryNames = categoryName.split(" ");

        const result: Result<void, string> = await invoke("get_category_data", { categoryNames });
        if (typeof result === 'string') {
            console.log("Error: Rustからのデータの受け取りでエラーが発生しました");
            return;
        }
    },
    
    selectedRecipe: null,
    selectRecipe: (recipe: Recipe) => {
        set({ selectedRecipe: recipe })
    },
}))