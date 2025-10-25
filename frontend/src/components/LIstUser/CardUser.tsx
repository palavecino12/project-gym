//Aca vamos a crear un componente que reciba por props los datos del usuario y cree una tarjeta del usuario
//Este componente mas adelante tendra los botones para modificar o eliminar el usuario
import { Pencil, Trash2 } from "lucide-react"
import { useDeleteUser } from "../../hooks/useDeleteUser"
import type { User } from "../../services/userServices"
import { ButtonCardUser } from "./ButtonCardUser"

interface props {
    user:User
    handleRefresh:()=>void//Se lo pasamos al hook useDeleteUser para que la lista se actualice luego de eliminar el usuario
    userUpdate:React.Dispatch<React.SetStateAction<User | null>>//Se lo pasamos al boton de editar
    showForm:()=>void//Se lo pasamos al boton de editar, es para cerrar el formulario
}

const CardUser = ({user,handleRefresh,userUpdate,showForm}:props) =>{

    const {message,loading,error,userDelete} = useDeleteUser({handleRefresh})

    return(
        <div className="w-full py-1.5 rounded-2xl border border-black/20 bg-white text-gray-700 shadow-sm 
            flex flex-row items-center">
            <span className="ml-10 text-black">{user.name} {user.lastName} - {user.dni}</span>

            <div className="flex flex-row-reverse gap-8 ml-auto mr-10">
                <ButtonCardUser onClick={()=>{userDelete(Number(user.id));}}>
                    <Trash2 color="black"/>
                </ButtonCardUser>
                <ButtonCardUser onClick={()=>{userUpdate(user);showForm()}}>
                    <Pencil color="black"/>
                </ButtonCardUser>
            </div>

            {error && error.message}
            {loading && "Cargando..."}
            {message && message.message}
        </div>


    )
}

export default CardUser;