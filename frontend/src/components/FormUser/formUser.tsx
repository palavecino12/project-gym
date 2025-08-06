import {z} from 'zod';
import {useForm, type SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import InputForm from '../InputFormUser/inputFormUser'

// Definimos el esquema de validación para el formulario de usuario
const schema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    email: z.string().email("El email debe tener un formato válido"),
    dni: z.string().min(6, "El DNI debe tener al menos 6 caracteres"),
    edad: z.number().min(0, "La edad debe ser un número positivo"),
    number: z.string().min(7, "El número de teléfono debe tener al menos 7 caracteres"),
    address: z.string().min(10, "La dirección debe tener al menos 10 caracteres"),
});

//Creamo un tipo de TypeScript a partir del esquema de validación
export type FormValues = z.infer<typeof schema>;

const CustomForm=()=>{

    const {control,handleSubmit,formState:{errors}}=useForm<FormValues>({
        resolver:zodResolver(schema),
    })

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name='name' label='Name' control={control} type='text' error={errors.name} />
            <InputForm name='lastName' label='Last Name' control={control} type='text' error={errors.lastName} />
            <InputForm name='email' label='Email' control={control} type='email' error={errors.email} />
            <InputForm name='dni' label='DNI' control={control} type='text' error={errors.dni} />
            <InputForm name='edad' label='Edad' control={control} type='number' error={errors.edad} />
            <InputForm name='number' label='Number Phone' control={control} type='text' error={errors.number} />
            <InputForm name='address' label='Address' control={control} type='text' error={errors.address} />
            <button type="submit">Submit</button>
        </form>
    )

}

export default CustomForm;
