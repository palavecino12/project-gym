//Componente especifico para crear un usuario usando el formulario reutilizable
import { FormUser } from "../FormUser/FormUser"
import type { FormValues } from "../../schemas/schemaForm"
import { useCreateUser } from "../../hooks/useCreateUser"

interface props{
    closeForm:()=>void
    handleRefresh:()=>void
}

export const FormUserCreate=({closeForm,handleRefresh}:props)=>{
    const {message,error,loading,userCreate}= useCreateUser()

    const handleCreate=async(data:FormValues)=>{

        await userCreate(data)
        //En caso de error que no cierre el form asi se puede ver el mensaje de error
        if(!error){
            closeForm()
            handleRefresh()
        }
    }

    return(
        <>
        <FormUser initialValues={{}} onSubmit={handleCreate} buttonText="Crear" title="Añadir Usuario" closeForm={closeForm}/>
        
        {message && <p>{message?.message}</p>}
        {loading && <p>Cargando...</p>}
        {error && <p>{error.message}</p>}
        </>
    )
}

