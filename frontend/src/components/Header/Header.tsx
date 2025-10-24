import type { ReactNode } from "react"

interface props{
    children:ReactNode
}

export const Header=({children}:props)=>{
    return(
        <header className="w-full bg-white shadow-xl py-8 px-8 flex items-center justify-evenly rounded-b-2xl">
            <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Panel de Usuarios</h1>
            {children}
        </header>
    )
}