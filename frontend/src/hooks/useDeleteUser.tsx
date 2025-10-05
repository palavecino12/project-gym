//Este hook esta enfocado en mostrar mensaje de: exito | error | cargando para el componente

import { useState } from "react"
import {deleteUser} from "../services/userServices"

interface props{
    handleRefresh:()=>void
}

export const useDeleteUser=({handleRefresh}:props)=>{
    const [message, setMessage]= useState<{message:string}|null>(null)
    const [error,setError]= useState<Error|null>(null)
    const [loading,setLoading]= useState(false)

    const userDelete=async(id:number)=>{

        try {
            
            setLoading(true)
            const message=await deleteUser(id)
            setMessage(message)
            setError(null)
            handleRefresh()//Actualizamos la lista
            
        } catch (error) {
            
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error("Error desconocido"));
            }

        }finally{
            setLoading(false)
        }

    }

    return {message,error,loading,userDelete}
}