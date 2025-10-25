
//Aca vamos a crear un componente para buscar a un usuario por nombre y/o apellido
interface props{
    setUserSearch:React.Dispatch<React.SetStateAction<string>>
}
export const SearchUser=({setUserSearch}:props)=>{

    
    return(
        <input type="text" placeholder="Buscar usuario..." 
            className="w-full max-w-md rounded-xl bg-gray-900/13 px-5 py-2 text-gray-700 shadow-lg  outline-none 
            transition-all duration-200 placeholder:text-gray-500 hover:shadow-2xl hover:-translate-y-1 focus:shadow-2xl
            focus:-translate-y-1"
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