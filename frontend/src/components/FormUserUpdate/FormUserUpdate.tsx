import { useUpdateUser } from "../../hooks/useUpdateUser"
import type { FormValues } from "../../schemas/schemaForm"
import type { User } from "../../services/userServices"
import { FormUser } from "../FormUser/FormUser"

//Componente especifico para crear un usuario usando el formulario reutilizable
interface props{
    closeForm:()=>void
    handleRefresh:()=>void
    user:User|null
    
}

export const FormUserUpdate=({closeForm,handleRefresh,user}:props)=>{
    const{message,error,loading,userUpdate}=useUpdateUser()

    const handleUpdate=async(data:FormValues)=>{
        if (user){
            const success=await userUpdate(data,user.id)

            //En caso de error no cerramos el formulario
            if(success){
                closeForm()
                handleRefresh()
            }
        }
    }

    return(
        <>
        <FormUser initialValues={{
            name:user?.name,
            lastName:user?.lastName,
            email:user?.email,
            dni:String(user?.dni),
            age:String(user?.age),
            number:user?.number,
            address:user?.address
        }} onSubmit={handleUpdate} buttonText="Editar" title="Editar Usuario" closeForm={closeForm}/>

        {loading && <p>Cargando...</p>}
        {error && <p>{error.message}</p>}
        {message && <p>{message.message}</p>}
        </>
    )
}