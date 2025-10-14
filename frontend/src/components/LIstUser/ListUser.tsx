//Aqui vamos a mostrar la lista de usuarios, tengo que crear otro componente que reciba cada uno de los usuarios y los ponga bonitos.
//Tenemos que crear un state para almacenar los datos del usuario(el state es actualizado por un useEffect que se encarga de hacer 
// la llamada a la funcion que traer los usuarios), otro para el estado de carga y otro para los errores.
//Usamos un array de usuarios como ejemplo. Luego traemos los datos del back.
import CardUser from "./CardUser";
import { useGetUsers } from "../../hooks/useGetUsers";
import {type User} from "../../services/userServices"
import "./listUser.css"

interface props{
    refreshValue:boolean
    refresh:()=>void//Se pasa a CardUser
    userUpdate:React.Dispatch<React.SetStateAction<User|null>>//Se pasa a CardUser
    showForm:()=>void//Se pasa al CardUser

}

const ListUser = ({refreshValue,refresh,userUpdate,showForm}:props)=>{ 

    const {users,loading,error}=useGetUsers(refreshValue)

    if(loading){
        return(
            <p>Cargando...</p>
        )
    }
    if(error){
        return(
            <p>Error: {error.message}</p>
        )
    }
    if(users && users.length>0){
        return(
        users.map(user=><CardUser  key={user.id} user={user} handleRefresh={refresh} userUpdate={userUpdate} showForm={showForm}/>)
        )
    }

    return <p className="not-users">No hay usuarios disponibles</p>
}

export default ListUser;