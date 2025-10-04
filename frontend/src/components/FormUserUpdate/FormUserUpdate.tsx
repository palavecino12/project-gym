import { useUpdateUser } from "../../hooks/useUpdateUser"
import type { FormValues } from "../../schemas/schemaForm"
import { FormUser } from "../FormUser/FormUser"

//Componente especifico para crear un usuario usando el formulario reutilizable
interface props{
    closeForm:()=>void
    
}

export const FormUserUpdate=()=>{
    const{userUpdate}=useUpdateUser()

    const handleUpdate=async(data:FormValues)=>{
        await userUpdate(data)
    }

    return(
        <FormUser initialValues={} onSubmit={} />
    )
}