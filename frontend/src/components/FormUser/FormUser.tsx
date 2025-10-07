//Formulario reutilizable para que se pueda usar al editar un usuario y al crearlo
//Aqui solo vamos a renderizar los componentes y validar los datos, la logica de ejecucion(crear o editar usuario) se lo dejamos a "onSubmit"
import { useForm, type SubmitHandler } from "react-hook-form"
import { type FormValues,schema } from "../../schemas/schemaForm"
import { zodResolver } from "@hookform/resolvers/zod"
import InputForm from "./InputFormUser"
import "./formUser.css"

interface props{
    title:string
    initialValues?:Partial<FormValues>//Si esta variable llega vacia, se crea un usuario con los datos que ingrese. Si llega con datos, es para editar 
    onSubmit:(data:FormValues)=>Promise<void>//onBumit va a ser la funcion de crear el usuario o editarlo
    buttonText:string
    closeForm:()=>void
}

export const FormUser=({title,initialValues,buttonText,onSubmit,closeForm}:props)=>{

    //Validamos los datos del usuario
    const {control,handleSubmit,formState:{errors},setError}=useForm<FormValues>({
        resolver:zodResolver(schema),
        defaultValues:initialValues//Los inputs apareceran rellenados con estos datos, asi el usuario los puede editar, si llega vacia los inputs estaran vacios para que los rellene el usuario
    })

    //Creamos el metodo que se va a ejecutar si todos los campos son validos
    const handleFormSubmit:SubmitHandler<FormValues>= async (data)=>{

        try {
            
            await onSubmit(data)//Ejecutamos la funcion de crear o editar usuario
        } catch (error) {
            //Error general al crear un usuario
            setError("root",{type:"network",message:"Error al crear el usuario"})
            console.log(error)
        }
    }

        return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='form-container'>
            {<h1>{title}</h1>}
            <InputForm name='name' label='Name' control={control} type='text' error={errors.name} />
            <InputForm name='lastName' label='Last Name' control={control} type='text' error={errors.lastName} />
            <InputForm name='email' label='Email' control={control} type='email' error={errors.email} />
            <InputForm name='dni' label='DNI' control={control} type='string' error={errors.dni} />
            <InputForm name='age' label='Age' control={control} type='number' error={errors.age} />
            <InputForm name='number' label='Number Phone' control={control} type='text' error={errors.number} />
            <InputForm name='address' label='Address' control={control} type='text' error={errors.address} />

            <button className='btn submit' type="submit">{buttonText}</button>
            <button className='btn cancel' type="button" onClick={closeForm}>Cancelar</button>
            {errors.root && <p className='message-error'>{errors.root.message}</p> }
        </form>
    )

}