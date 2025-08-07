import { z } from 'zod';
//Schema de validaciones para el usuario
export const userSchema=z.object({
    email: z.string().email("El email tiene que tener formato del mismo"),
    name: z.string().min(1,"El nombre no puede estar vacío"),
    lastName: z.string().min(1,"El apellido no puede estar vacío"),
    dni: z.number("El dni debe ser un número").int().min(6),
    edad: z.number("La edad debe ser un número").int().positive(),
    number: z.string("el numero debe ser texto").min(1,"El número no puede estar vacío"),
    direccion: z.string("La direccion debe ser texto").min(1,"La dirección no puede estar vacía"),
    estado: z.string("El estado debe ser texto").min(1,"El estado no puede estar vacío")
});