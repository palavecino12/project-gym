
//Aca vamos a crear un componente para buscar a un usuario por nombre y/o apellido
interface props{
    setUserSearch:React.Dispatch<React.SetStateAction<string>>
}
export const SearchUser=({setUserSearch}:props)=>{

    
    return(
        <input type="text" placeholder="Buscar..." 
            className="w-full max-w-md rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 shadow-sm 
            outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:shadow-md"
            onChange={(e) => {
                const value = e.target.value.trim()
                if (value.length > 2) {
                    setUserSearch(value)
                } else {
                    setUserSearch("")
                }
            }}/>
    )
}