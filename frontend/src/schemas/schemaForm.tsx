import {z} from 'zod';

// Definimos el esquema de validación para el formulario de usuario y creamos el type
export const schema = z.object({
    name: z.string("Este campo es obligatorio").min(2, "El nombre debe tener al menos 2 caracteres"),
    lastName: z.string("Este campo es obligatorio").min(2, "El apellido debe tener al menos 2 caracteres"),
    email: z.string("Este campo es obligatorio").email("El email debe tener un formato válido"),
    dni: z.string("Este campo es obligatorio").min(6, "El DNI debe tener al menos 6 caracteres"),
    age: z.string("Este campo es obligatorio").min(0, "La edad debe ser un número positivo"),
    number: z.string("Este campo es obligatorio").min(7, "El número de teléfono debe tener al menos 7 caracteres"),
    address: z.string("Este campo es obligatorio").min(10, "La dirección debe tener al menos 10 caracteres"),
});

export type FormValues = z.infer<typeof schema>;