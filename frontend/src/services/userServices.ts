import { type FormValues } from "../schemas/schemaForm"

//Servicio para crear un usuario

export const createUser = async (data:FormValues)=>{

    const url = "http://localhost:3000/api/users/addUser"

    const res= {
            email:data.email,
            name:data.name,
            lastName:data.lastName,
            dni:Number(data.dni),
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
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`Error al crear usuario:${errorData.message}`);
        }
        const result=await response.json()
        return result
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
    dni: number;
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