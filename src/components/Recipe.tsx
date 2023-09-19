type RecipeProps = {
    recipeTitle: string,
    recipeImg: string,

}

export default function RecipeComponent(props: RecipeProps) {
    const { recipeTitle, recipeImg } = props;

  return (
    <div>
      <p>{ recipeTitle }</p>
      <img src={ recipeImg } alt="レシピの画像"/>
    </div>
  )
}