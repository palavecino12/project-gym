//Aqui va la logica para mostrar el formulario o no
//Tengo que importa el boton y el formulario
//Aqui tengo que crear un componente donde renderiza el boton y contiene
//logica de si renderizar el formulario o no

import { useState } from 'react';
import CustomForm from './UserForm/FormUser'
import ButtonForm from './UserForm/ButtonFormUser'
import ListUser from './UserList/ListUser';

const UserSection = () =>{

    const [showFrom,setShowFrom] = useState(false)

    const toggleForm=()=>{
        setShowFrom(!showFrom)
    }

    return(
        <>
        {showFrom && <CustomForm/>}
        <ButtonForm onClick={toggleForm} showFrom={showFrom} />
        <ListUser/>
        </>
    )
}

export default UserSection;