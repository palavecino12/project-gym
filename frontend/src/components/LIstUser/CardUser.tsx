//Aca vamos a crear un componente que reciba por props los datos del usuario y cree una tarjeta del usuario
//Este componente mas adelante tendra los botones para modificar o eliminar el usuario
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
        <div className="w-full rounded-full border border-gray-300 bg-white py-1 text-gray-700 shadow-sm 
            flex flex-row justify-around items-center">
            <span className="">{user.name} {user.lastName} - {user.dni}</span>
            <div className="">
                <ButtonCardUser onClick={()=>{userDelete(Number(user.id));}} text="Eliminar"/>
                <ButtonCardUser onClick={()=>{userUpdate(user);showForm()}} text="Editar"/>
            </div>

            {error && error.message}
            {loading && "Cargando..."}
            {message && message.message}
        </div>


    )
}

export default CardUser;