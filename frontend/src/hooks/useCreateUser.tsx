//Este hook esta enfocado en mostrar mensaje de: exito | error | cargando para el componente

import { useState } from "react"
import type { FormValues } from "../schemas/schemaForm";
import { createUser } from "../services/userServices";

export const useCreateUser=()=>{

    const [message,setMessage]=useState<{message:string}|null>(null);
    const [error,setError]=useState<Error|null>(null);
    const [loading,setLoading]=useState(false);

    const userCreate=async(user:FormValues)=>{
        try {
            
            setLoading(true)
            const message=await createUser(user)
            setMessage(message)
            setError(null)

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
    return {message,error,loading,userCreate}

}