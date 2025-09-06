import { useState } from "react"
import {deleteUser} from "../services/userServices"

interface props{
    handleRefresh:()=>void
}

export const useDeleteUser=({handleRefresh}:props)=>{
    const [success, setSuccess]= useState<string|null>(null)
    const [error,setError]= useState<Error|null>(null)
    const [loading,setLoading]= useState(false)

    const userDelete=async(id:number)=>{

        try {
            
            setLoading(true)
            const data=await deleteUser(id)
            setSuccess(data)
            setError(null)
            handleRefresh()
            
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

    return {success,error,loading,userDelete}
}