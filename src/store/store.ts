import { create } from "zustand";
import { invoke } from "@tauri-apps/api";

import { State } from "../types/State";
import { Recipe } from "../types/Recipe";
import { Result } from "../types/Result";

export const useStore = create<State>((set, get) => ({
    recipeList: [],

    getRecipeList: async (categoryName: string) => {
        set({ recipeList: [] })

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
        set({ showRecipeList: [] })
        const materialNamesArray = materialName.split(' ');

        recipeList.map((recipe) => {
            // `every` メソッドを使用して、materialNamesArray の各 "文字列" が
            // recipe.recipeMaterial のいずれかの "文字列" に部分一致するか確認
            const doesMatch = materialNamesArray.every((oneMaterial) => {
                return recipe.recipeMaterial.some((recipeMaterial) => {
                    return recipeMaterial.includes(oneMaterial);
                });
            });
        
            // 全ての要素(文字の部分一致)が含まれている場合、showRecipeList に追加
            if (doesMatch) {
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