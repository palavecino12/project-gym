//Aqui va la logica para mostrar el formulario o no
//Tengo que importa el boton y el formulario
//Aqui tengo que crear un componente donde renderiza el boton y contiene
//logica de si renderizar el formulario o no

import { useState } from 'react';
import { FormUserCreate } from './FormUserCreate/FormUserCreate';
import ButtonForm from './FormUser/ButtonFormUser'
import ListUser from './LIstUser/ListUser';

const UserSection = () =>{
    //Estado para que se refresque la lista de usuarios
    const [refreshList, setRefreshList] = useState(false)
    const toggleRefresh=()=>{
        setRefreshList(!refreshList)
    }
    //Estado para aparecer o desaparecer el formulario donde creamos el usuario
    const [showCreateForm,setShowCreateForm] = useState(false)
    const toggleCreateForm=()=>{
        setShowCreateForm(!showCreateForm)
    }
    //Estado para aparecer o desaparecer el formulario donde editamos el usuario
    //const [showUpdateForm,setShowUpdateForm] = useState(false)
    //const toggleUpdateForm=()=>{
    //    setShowUpdateForm(!showUpdateForm)
    //}

    return(
        <>
        {showCreateForm && <FormUserCreate closeForm={toggleCreateForm} handleRefresh={toggleRefresh}/>}
        <ButtonForm onClick={toggleCreateForm} showFrom={showCreateForm} />
        {!showCreateForm &&<ListUser handleRefresh={toggleRefresh} refresh={refreshList}/>}
        </>
    )
}

export default UserSection;