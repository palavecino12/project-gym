//Componente especifico para crear un usuario usando el formulario reutilizable
import { FormUser } from "../FormUser/FormUser"
import type { FormValues } from "../../schemas/schemaForm"
import { useCreateUser } from "../../hooks/useCreateUser"

interface props{
    closeForm:()=>void
    refresh:()=>void
}

export const FormUserCreate=({closeForm,refresh}:props)=>{
    const {message,error,loading,userCreate}= useCreateUser()

    
    const handleCreate=async(data:FormValues)=>{
        
        const success=await userCreate(data)
        
        //En caso de error que no cierre el form asi se puede ver el mensaje de error
        if(success){
            closeForm()
            refresh()
        }
    }
    //Luego de que se ejecute handleCreate se produce un re-render y "error" toma el nuevo valor
    //De esta forma podemos ver el mensaje de error correctamente

    return(
        <>
        <FormUser initialValues={{}} onSubmit={handleCreate} buttonText="Crear" title="Añadir Usuario" closeForm={closeForm}/>
        
        {message && <p>{message?.message}</p>}
        {loading && <p>Cargando...</p>}
        {error && <p>{error.message}</p>}
        </>
    )
}

