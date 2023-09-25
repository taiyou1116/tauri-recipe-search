import { useState } from "react";

import RecipeComponent from "./Recipe";
import ModalComponent from "./Modal";
import RecipeDetailsComponent from "./RecipeDetails";
import { Recipe } from "../types/Recipe";


type RecipeListProps = {
    showRecipeList: Recipe[];
    selectedRecipe: Recipe | null,
    selectRecipe: (recipe: Recipe) => void,
}

export default function RecipeListComponent(props: RecipeListProps) {
    const { showRecipeList, selectedRecipe, selectRecipe } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(recipe: Recipe) {
      setIsModalOpen(true);
      selectRecipe(recipe);
    }

    function closeModal() {
      setIsModalOpen(false);
    }

  return (
    <div className="grid grid-cols-3 content-start gap-4 h-[820px] overflow-y-auto p-2">
      { showRecipeList.map((recipe) => (
        <RecipeComponent
          recipeTitle={ recipe.recipeTitle }
          recipeImg={ recipe.foodImageUrl }
          onClick={() => openModal(recipe)}
          key={recipe.recipeId}
        />
      ))}
      
      <ModalComponent 
        children={<RecipeDetailsComponent recipe={selectedRecipe}/>}
        open={isModalOpen}
        onClose={() => closeModal()}
      />
    </div>
  )  
}