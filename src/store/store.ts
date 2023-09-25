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

        const result: Result<void, string> = await invoke("get_category_data", { categoryName });
        if (typeof result === 'string') {
            console.log("Error: Rustからのデータの受け取りでエラーが発生しました");
            return;
        }
    },

    showRecipeList: [],
    GetDataMatchingMaterial: (materialName: string) => {
        const recipeList = get().recipeList;

        // 材料がない場合は全てのカテゴリレシピを表示
        if (materialName === "") {
            set({ showRecipeList: recipeList })
            return;
        }

        // set({ showRecipeList: [] })
        const materialNamesArray = materialName.split(' ');

        recipeList.map((recipe) => {
            const doesNotMatch = recipe.recipeMaterial.some((material) => {
                return materialNamesArray.some((oneMaterial) => oneMaterial !== material);
            });
    
            if (!doesNotMatch) {
                set((state) => ({
                    showRecipeList: [...state.showRecipeList, recipe]
                }));
            }
        });
    },
    
    selectedRecipe: null,
    selectRecipe: (recipe: Recipe) => {
        set({ selectedRecipe: recipe })
    },
}))