
type NavigationProps = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  onGetRecipeData: (name: string) => void,
}

export default function NavigationbarComponent(props: NavigationProps) {
  const { categoryName, setCategoryName, onGetRecipeData } = props;

  function handleSubmit(e: React.FormEvent) {
    console.log("a");
    e.preventDefault();
    onGetRecipeData(categoryName);
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-center">Recipe Search</h1>
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 h-8 justify-end">
        <input 
          type="text" 
          placeholder="input category name" 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          検索
        </button>
      </form>
      
    </div>
  );
}