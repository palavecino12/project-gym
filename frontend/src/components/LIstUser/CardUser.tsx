//Aca vamos a crear un componente que reciba por props los datos del usuario y cree una tarjeta del usuario
//Este componente mas adelante tendra los botones para modificar o eliminar el usuario
import "./cardUser.css"
import { useDeleteUser } from "../../hooks/useDeleteUser"
import type { User } from "../../services/userServices"

interface props {
    user:User
    handleRefresh:()=>void//Se lo pasamos al hook useDeleteUser
    userUpdate:React.Dispatch<React.SetStateAction<User | null>>//Se lo pasamos al boton de editar
    showForm:()=>void
}

const CardUser = ({user,handleRefresh,userUpdate,showForm}:props) =>{

    const {message,loading,error,userDelete} = useDeleteUser({handleRefresh})

    return(
        <div className="card-user">
            <span className="user-info">{user.name} {user.lastName} - {user.dni}</span>
            <div className="actions">
                <button onClick={()=>{userDelete(Number(user.id));}}>Eliminar</button>
                <button onClick={()=>{userUpdate(user);showForm()}}>Editar</button>
            </div>

            {error && error.message}
            {loading && "Cargando..."}
            {message && message.message}
        </div>


    )
}

export default CardUser;