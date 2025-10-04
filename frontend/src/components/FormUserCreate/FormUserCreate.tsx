//Componente especifico para crear un usuario usando el formulario reutilizable
import { FormUser } from "../FormUser/FormUser"
import { createUser } from "../../services/userServices"
import type { FormValues } from "../../schemas/schemaForm"

interface props{
    closeForm:()=>void
    handleRefresh:()=>void
}

export const FormUserCreate=({closeForm,handleRefresh}:props)=>{
    const handleCreate=async(data:FormValues)=>{
        await createUser(data)
        closeForm()
        handleRefresh()
    }

    return(
        <FormUser initialValues={{}} onSubmit={handleCreate} buttonText="Crear"/>
    )
}

