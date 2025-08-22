import { type FormValues } from "../schemas/schemaForm"

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
                console.error('Error al crear usuario:', errorData.message);
                return;
            }

            const result=await response.json()
            console.log(result.message)

        } catch (error) {
            console.log(error)
        }
}