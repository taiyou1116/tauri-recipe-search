type InputProps = {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function InputComponent(props: InputProps) {
    const { placeholder, value, onChange } = props;

    return(
      <input 
        type="text" 
        placeholder={ placeholder } 
        value={ value }
        onChange={(e) => onChange(e)}
        className="border p-2 rounded-md 
                   focus:outline-none focus:ring focus:ring-blue-500
                   transition-shadow duration-200 shadow-md"
      />
    )
}