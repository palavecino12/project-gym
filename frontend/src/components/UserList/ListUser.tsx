//Aqui vamos a mostrar la lista de usuarios, tengo que crear otro componente que reciba cada uno de los usuarios y los ponga bonitos.
//Tenemos que crear un state para almacenar los datos del usuario(el state es actualizado por un useEffect que se encarga de hacer 
// la llamada a la funcion que traer los usuarios), otro para el estado de carga y otro para los errores.
//Usamos un array de usuarios como ejemplo. Luego traemos los datos del back.
import CardUser from "./CardUser";
const users= [
    {
        "id": 6,
        "email": "facundolpal@gmail.com",
        "name": "facundo",
        "lastName": "palavecino",
        "dni": 43830657,
        "age": 23,
        "number": "2634377144",
        "address": "dasdsadsadasdasdad",
        "registrationDate": "2025-08-13T15:21:27.294Z",
        "state": "activo"
    },
    {
        "id": 7,
        "email": "robertopontis@gmail.com",
        "name": "Leandro",
        "lastName": "Pontis",
        "dni": 45876098,
        "age": 19,
        "number": "2634658790",
        "address": "asdsadsadasdas",
        "registrationDate": "2025-08-13T17:46:30.387Z",
        "state": "activo"
    }
]

const ListUser = ()=>{ 

    return(
        users.map(user=><CardUser name={user.name} lastName={user.lastName} dni={user.dni} />)
    )
}

export default ListUser;