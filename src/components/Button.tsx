
type ButtonProps = {
  title: string,
}

export default function ButtonComponent(props: ButtonProps) {
    const { title, } = props;

    return (
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md 
                     transition-all duration-200 shadow-lg shadow-slate-400 active:translate-y-1 active:shadow-none
                     flex items-center justify-center"
      >
        {title}
      </button>
    )
}