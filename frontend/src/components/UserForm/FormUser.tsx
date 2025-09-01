import {useForm, type SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import InputForm from './InputFormUser'
import {schema,type FormValues} from '../../schemas/schemaForm'
import { createUser } from '../../services/userServices';
import './formUser.css'

interface props{
    closeForm:()=>void
    handleRefresh:()=>void
}

const CustomForm=({closeForm,handleRefresh}:props)=>{

    const {control,handleSubmit,formState:{errors},setError}=useForm<FormValues>({
        resolver:zodResolver(schema),
    })

    const onSubmit:SubmitHandler<FormValues> = async (data) => {
        try {
            await createUser(data)
            closeForm()
            handleRefresh()
        } catch (error) {
            setError("root",{type:"network",message:"Error al crear el usuario"})
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
            <InputForm name='name' label='Name' control={control} type='text' error={errors.name} />
            <InputForm name='lastName' label='Last Name' control={control} type='text' error={errors.lastName} />
            <InputForm name='email' label='Email' control={control} type='email' error={errors.email} />
            <InputForm name='dni' label='DNI' control={control} type='number' error={errors.dni} />
            <InputForm name='age' label='Age' control={control} type='number' error={errors.age} />
            <InputForm name='number' label='Number Phone' control={control} type='text' error={errors.number} />
            <InputForm name='address' label='Address' control={control} type='text' error={errors.address} />
            <button className='btn-submit' type="submit">Submit</button>
            {errors.root && <p className='message-error'>{errors.root.message}</p> }
        </form>
    )
}

export default CustomForm;
