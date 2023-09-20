
type Props = {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  onGetRecipeData: (name: string) => void,
}

export default function NavigationbarComponent(props: Props) {
  const { categoryName, setCategoryName, onGetRecipeData } = props;

  return (
    <div>
      <h1 className="font-bold">Recipe Search</h1>
      <input 
        type="text" 
        placeholder="input category name" 
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
      />
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => onGetRecipeData(categoryName)}
      >
        検索
      </button>
    </div>
  );
}