
//Aca vamos a crear un componente para buscar a un usuario por nombre y/o apellido
interface props{
    setUserSearch:React.Dispatch<React.SetStateAction<string>>
}
export const SearchUser=({setUserSearch}:props)=>{

    
    return(
        <input type="text" placeholder="Buscar..." 
            //value={query} 
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