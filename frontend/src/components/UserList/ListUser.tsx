//Aqui vamos a mostrar la lista de usuarios, tengo que crear otro componente que reciba cada uno de los usuarios y los ponga bonitos.
//Tenemos que crear un state para almacenar los datos del usuario(el state es actualizado por un useEffect que se encarga de hacer 
// la llamada a la funcion que traer los usuarios), otro para el estado de carga y otro para los errores.
//Usamos un array de usuarios como ejemplo. Luego traemos los datos del back.
import CardUser from "./CardUser";
import { useGetUsers } from "../../hooks/useGetUsers";


const ListUser = ()=>{ 

    const {users,loading,error}=useGetUsers()
    
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
    if(users){
        return(
        users.map(user=><CardUser key={user.id} name={user.name} lastName={user.lastName} dni={user.dni} />)
        )
    }
    if (!loading && !error && !users) {
        return (
        <p>No hay usuarios disponibles</p>
        )
    }

}

export default ListUser;