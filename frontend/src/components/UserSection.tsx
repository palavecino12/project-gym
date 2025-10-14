//Este archivo maneja la logica de que componente se renderiza

import { useState } from 'react';
import { FormUserCreate } from './FormUserCreate/FormUserCreate';
import { FormUserUpdate } from './FormUserUpdate/FormUserUpdate';
import ButtonForm from './FormUser/ButtonFormUser'
import ListUser from './LIstUser/ListUser';
import { SearchUser } from './SearchUser/SearchUser';
import { type User } from '../services/userServices';

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
    const [showUpdateForm,setShowUpdateForm] = useState(false)
    const toggleUpdateForm=()=>{
        setShowUpdateForm(!showUpdateForm)
    }

    //Estado donde vamos a almacenar los datos del usuario a editar
    const [userUpdate,setUserUpdate]=useState<User|null>(null)

    return(
        <>
        <SearchUser/>
        {showCreateForm && <FormUserCreate closeForm={toggleCreateForm} refresh={toggleRefresh}/>}
        {showUpdateForm && <FormUserUpdate closeForm={toggleUpdateForm} refresh={toggleRefresh} user={userUpdate}/>}
        {!showCreateForm&&!showUpdateForm && <ButtonForm onClick={toggleCreateForm}/>}
        {!showCreateForm&&!showUpdateForm && <ListUser refresh={toggleRefresh} refreshValue={refreshList} userUpdate={setUserUpdate} showForm={toggleUpdateForm}/>}
        </>
    )
}

export default UserSection;