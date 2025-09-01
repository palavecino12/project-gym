//Aca vamos a crear un componente que reciba por props los datos del usuario y cree una tarjeta del usuario
//Este componente mas adelante tendra los botones para modificar o eliminar el usuario
import "./cardUser.css"
import { useDeleteUser } from "../../hooks/useDeleteUser"

interface props {
    id:number,
    name:string,
    lastName:string,
    dni:number,
    handleRefresh:()=>void    
}

const CardUser = ({name,lastName,dni,id,handleRefresh}:props) =>{

    const {success,loading,error,userDelete} = useDeleteUser()

    return(
        <div className="card-user">
            <span className="user-info">{name} {lastName} - {dni}</span>
            <div className="actions">
                <button onClick={()=>{userDelete(Number(id));handleRefresh()}}>Eliminar</button>
                <button>Editar</button>
            </div>
            {error && error.message}
            {loading && "Cargando..."}
            {success && success}
        </div>


    )
}

export default CardUser;