import { z } from 'zod';
//Schema de validaciones para el usuario
export const userSchema=z.object({
    email: z.string().email(),
    name: z.string().min(1),
    lastName: z.string().min(1),
    dni: z.number().int().min(6),
    edad: z.number().int().positive(),
    number: z.string().min(1),
    direccion: z.string().min(1),
    estado: z.string()
});