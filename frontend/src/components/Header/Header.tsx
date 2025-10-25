import type { ReactNode } from "react"

interface props{
    children:ReactNode
}

export const Header=({children}:props)=>{
    return(
        <header className="w-full bg-white shadow-xl py-8 px-8 flex items-center justify-start 2xl:justify-center flex-row gap-10">
            <h1 className="md:ml-10 lg:ml-0 xl:ml-20 text-2xl font-semibold text-gray-800">Panel de Usuarios</h1>
            {children}
        </header>
    )
}