//Este archivo maneja la logica de que componente se renderiza

import { useState } from 'react';
import { FormUserCreate } from './FormUserCreate/FormUserCreate';
import { FormUserUpdate } from './FormUserUpdate/FormUserUpdate';
import { Header } from './Header/Header';
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

    //Estado donde vamos a almacenar los usuarios que se filtran cuando el cliente escribe algo en el buscador
    const [userSearch,setUserSearch]=useState("")


    return (
        <div className="min-h-screen flex flex-col bg-gray-300">
            {/* HEADER CON BUSCADOR */}
            {!showCreateForm && !showUpdateForm && 
            <Header>
                <SearchUser setUserSearch={setUserSearch} />
            </Header>
            }
            
            {/* CONTENIDO PRINCIPAL */}
            <main className="flex-1 w-full max-w-5xl mx-auto p-4 space-y-6">
            
            {/* FORMULARIO PARA CREAR */}
            {showCreateForm && (
                <div className="bg-white shadow-xl rounded-2xl py-16 flex justify-center items-center">
                    <FormUserCreate closeForm={toggleCreateForm} refresh={toggleRefresh}/>
                </div>
            )}

            {/* FORMULARIO PARA EDITAR */}
            {showUpdateForm && (
                <div className="bg-white shadow-md rounded-2xl p-6 flex justify-center">
                    <FormUserUpdate closeForm={toggleUpdateForm} refresh={toggleRefresh} user={userUpdate}/>
                </div>
            )}
        
            {/* BOTÓN + LISTA */}
            {!showCreateForm && !showUpdateForm && (
                <div className="flex flex-col gap-4">
                    <div className="">
                        <ButtonForm text="Añadir" onClick={toggleCreateForm} />
                    </div>
            
                    <div className="bg-white shadow-md rounded-2xl p-4 overflow-hidden">
                        <ListUser userSearch={userSearch} refresh={toggleRefresh} refreshValue={refreshList} userUpdate={setUserUpdate} showForm={toggleUpdateForm}/>
                    </div>
                </div>
            )}
            </main>
        </div>
);

}

export default UserSection;