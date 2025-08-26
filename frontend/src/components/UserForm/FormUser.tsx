import {useForm, type SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import InputForm from './InputFormUser'
import {schema,type FormValues} from '../../schemas/schemaForm'
import { createUser } from '../../services/userServices';
import './formUser.css'

const CustomForm=()=>{

    const {control,handleSubmit,formState:{errors}}=useForm<FormValues>({
        resolver:zodResolver(schema),
    })

    const onSubmit:SubmitHandler<FormValues> = async (data) => {
        await createUser(data)
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomForm;
