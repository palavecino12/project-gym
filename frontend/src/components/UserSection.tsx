//Aqui va la logica para mostrar el formulario o no
//Tengo que importa el boton y el formulario
//Aqui tengo que crear un componente donde renderiza el boton y contiene
//logica de si renderizar el formulario o no

import CustomForm from './UserForm/formUser'
import { useState } from 'react';
import ButtonForm from './UserForm/buttonFormUser'

const UserSection = () =>{

    const [showFrom,setShowFrom] = useState(false)

    const toggleForm=()=>{
        setShowFrom(!showFrom)
    }

    return(
        <>
        {showFrom && <CustomForm/>}
        <ButtonForm onClick={toggleForm} showFrom={showFrom} />
        </>
    )
}

export default UserSection;