const Input = ({placeholder, id, name, value, setValue, type}: any) => {
    function handleChange(e:any) {
        setValue(e.target.value);
    }
    return(
        <div className="flex flex-col md:mr-16">
            <label htmlFor={id} className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                {name}
            </label>
            <input id={id} value={value} onChange={handleChange} type={type ? type : "text"} className="w-full focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   placeholder={placeholder} />
        </div>
    )
}

export default Input;