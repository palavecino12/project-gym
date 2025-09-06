//Aqui va la logica para mostrar el formulario o no
//Tengo que importa el boton y el formulario
//Aqui tengo que crear un componente donde renderiza el boton y contiene
//logica de si renderizar el formulario o no

import { useState } from 'react';
import CustomForm from './UserForm/FormUser'
import ButtonForm from './UserForm/ButtonFormUser'
import ListUser from './UserList/ListUser';

const UserSection = () =>{
    //Estado para aparece o desaparecer el formulario
    const [showForm,setShowForm] = useState(false)
    const toggleForm=()=>{
        setShowForm(!showForm)
    }
    //Estado para que se refresque la lista de usuarios
    const [refreshList, setRefreshList] = useState(false)
    const toggleRefresh=()=>{
        setRefreshList(!refreshList)
    }

    return(
        <>
        {showForm && <CustomForm closeForm={toggleForm} handleRefresh={toggleRefresh}/>}
        <ButtonForm onClick={toggleForm} showFrom={showForm} />
        {!showForm &&<ListUser handleRefresh={toggleRefresh} refresh={refreshList}/>}
        </>
    )
}

export default UserSection;