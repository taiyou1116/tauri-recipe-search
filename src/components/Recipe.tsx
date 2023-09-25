type RecipeProps = {
    recipeTitle: string,
    recipeImg: string,
    onClick: () => void,
}

export default function RecipeComponent(props: RecipeProps) {
    const { recipeTitle, recipeImg, onClick } = props;

  return (
    <div 
      className="flex flex-col bg-sky-200 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg max-h-80"
      onClick={() => onClick()}
    >
      <h1 className="text-xl font-semibold mb-4">{recipeTitle}</h1>
      <div className="relative h-60">
        <img 
          src={recipeImg} 
          alt="レシピの画像" 
          className="absolute top-0 left-0 w-full h-full object-contain"/>
      </div>
    </div>
  )
}