import { z } from 'zod';

//Schema de validaciones para el usuario
export const userSchema=z.object({
    name: z.string().min(1, "Este campo es obligatorio").min(2, "El nombre debe tener al menos 2 caracteres"),
    lastName: z.string().min(1, "Este campo es obligatorio").min(2, "El apellido debe tener al menos 2 caracteres"),
    email: z.string().min(1, "Este campo es obligatorio").email("El email debe tener un formato válido"),
    dni: z.string().min(6, "El DNI debe tener al menos 6 caracteres").regex(/^\d+$/, "El DNI solo puede contener números"),
    age: z.number().min(0, "La edad debe ser un número positivo"),
    number: z.string().min(1, "Este campo es obligatorio").min(7, "El número de teléfono debe tener al menos 7 caracteres"),
    address: z.string().min(1, "Este campo es obligatorio").min(10, "La dirección debe tener al menos 10 caracteres"),
});