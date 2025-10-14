import { useState } from "react"

//Aca vamos a crear un componente para buscar a un usuario por nombre y/o apellido
export const SearchUser=()=>{

    const [query,setQuery]=useState("")
    console.log(query)
    return(
        <input type="text" placeholder="Buscar..." 
            //value={query} 
            onChange={(e) => {
                const value = e.target.value.trim()
                if (value.length > 2) {
                    setQuery(value)
                } else {
                    setQuery("")
                }
            }}/>
    )
}