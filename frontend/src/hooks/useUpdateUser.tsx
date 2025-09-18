import { useState } from "react";
import { updateUser, type User } from "../services/userServices";

export const useUpdateUser=()=>{

    const [user,setUser]=useState<User|null>(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState<Error|null>(null);

    const userUpdate=async(user:User)=>{
        try {

            setLoading(true)
            const data=await updateUser(user);
            setUser(data)
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
    return {user,error,loading,userUpdate}
}