
//Aca vamos a crear un componente para buscar a un usuario por nombre y/o apellido
interface props{
    setUserSearch:React.Dispatch<React.SetStateAction<string>>
}
export const SearchUser=({setUserSearch}:props)=>{

    
    return(
        <input type="text" placeholder="Buscar usuario..." 
            className="w-full max-w-md rounded-2xl border border-gray-400 bg-white px-5 py-2 text-gray-700 shadow-xl outline-none 
            transition-all duration-200 placeholder:text-gray-400 
            focus:shadow-inner focus:translate-y-1 focus:border-gray-500
            active:shadow-inner active:translate-y-1"
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