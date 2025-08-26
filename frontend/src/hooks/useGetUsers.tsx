import { useEffect, useState } from "react"
import {type User} from "../services/userServices"
import { getUsers } from "../services/userServices"

type Data=User[] | null
type ErrorType=Error | null

interface props{
    users:Data,
    loading:boolean,
    error:ErrorType
}

//Hook para traer a todos los usuarios
export const useGetUsers=():props=>{

    const [users,setUsers]=useState<Data>(null)
    const [error,setError]=useState<ErrorType>(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        
        const fetchUser=async()=>{
            try {
                setLoading(true)
                const data=await getUsers()
                setUsers(data)
                setError(null)
            } catch (error) {
                //El error de catch no es  siempre es un objeto Error
                //Verificamos si es un objeto Error
                if (error instanceof Error) {
                    setError(error);
                } else {
                    setError(new Error("Error desconocido"));
                }
            }finally{
                setLoading(false)
            }
        }
        fetchUser()

    },[])

    return {users,error,loading}
}