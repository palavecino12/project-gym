import { type FormValues } from "../schemas/schemaForm"

//Servicio para crear un usuario
//Aclaracion: en el front usamos "age" como string por problemas con zod, antes de mandar la data al back lo transformamos en numero
export const createUser = async (data:FormValues):Promise<{message:string}>=>{

    const url = "http://localhost:3000/api/users/addUser"

    //Validamos que "age" sea un numero
    if (isNaN(Number(data.age))) {
        throw new Error("La edad debe ser un número válido");
    }

    const res= {
            email:data.email,
            name:data.name,
            lastName:data.lastName,
            dni:data.dni,
            age:Number(data.age),
            number:data.number,
            address:data.address
        }

    try {

        const response = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(res)
        })
        //Capturamos el error del backend y lo mostramos
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`Error al crear usuario: ${errorData.message}`);
        }
        
        const message=await response.json()
        return message

    } catch (error) {
        console.log(error)
        throw error;
    }
}

//Servicio para traer a todos los usuarios
export type User = {
    id: number;
    email: string;
    name: string;
    lastName: string;
    dni: string;
    age: number;
    number: string;
    address: string;
    registrationDate: string; 
    state: "activo" | "inactivo";
};

export const getUsers=async():Promise<User[]>=>{

    const url="http://localhost:3000/api/users/getUsers"

    try {
        
        const response=await fetch(url)
    if(!response.ok){
        throw new Error("Error en traer a todos los usuarios")
    }
    const data:User[]=await response.json()
    return data

    } catch (error) {
        console.log(error)
        throw error
    }
}

//Sercicio para eliminar un usuario
export const deleteUser = async (id:number):Promise<{message:string}>=>{

    const url=`http://localhost:3000/api/users/deleteUser/${id}`

    try {

        const response= await fetch(url,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })
        if(!response.ok){
            const failed=await response.json()
            throw new Error(`${failed.message}`)
        }

        const message = await response.json();
        return message;

    } catch (error) {
        console.log(error)
        throw error
    }

}

//Servicio para editar el usuario
//Aclaracion: en el front usamos "age" como string por problemas con zod, antes de mandar la data al back lo transformamos en numero

export const updateUser = async (user:FormValues,id:number):Promise<{message:string}>=>{
    
    const url = `http://localhost:3000/api/users/updateUser/${id}`

    const res= {
            email:user.email,
            name:user.name,
            lastName:user.lastName,
            dni:user.dni,
            age:Number(user.age),//Transformamos
            number:user.number,
            address:user.address
        }

    try {
        
        const response= await fetch(url,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(res)
        })

        if(!response.ok){
            const failed=await response.json()
            throw new Error(`${failed.message}`)
        }

        const message=await response.json();
        return message;

    } catch (error) {
        console.log(error)
        throw error
    }
}