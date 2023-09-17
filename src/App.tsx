import "./App.css";
import NavigationbarComponent from "./components/Navigationbar";
import { useStore } from "./store/store";

export default function App() {

  const onGetRecipeData = useStore((store) => store.getRecipeList);
  const recipeList = useStore((store) => store.recipeList);

  return (
    <div>
      <NavigationbarComponent />
      <button onClick={() => onGetRecipeData()}/>

      {/* { recipeList.map((recipe) => (
        <div>
          <p> { recipe.recipeTitle } </p>
          <img src={recipe.foodImageUrl} alt="foodImage" />
        </div>
      ))} */}
    </div>
  )
}
