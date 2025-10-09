//Este hook esta enfocado en mostrar mensaje de: exito | error | cargando para el componente

import { useState } from "react";
import { updateUser} from "../services/userServices";
import { type FormValues } from "../schemas/schemaForm";

export const useUpdateUser=()=>{

    const [message,setMessage]=useState<{message:string}|null>(null);
    const [error,setError]=useState<Error|null>(null);
    const [loading,setLoading]=useState(false);

    const userUpdate=async(user:FormValues,id:number):Promise<boolean>=>{
        try {

            setLoading(true)
            const message=await updateUser(user,id);
            setMessage(message)
            return true

        } catch (error) {

            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error("Error desconocido"));
            }
            return false

        }finally{
            setLoading(false)
        }
    }
    return {message,error,loading,userUpdate}
}