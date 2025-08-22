import {Request,Response,NextFunction} from 'express';
import {PrismaClient} from '@prisma/client';
import {userSchema} from '../schemas/schemas-users';
import {errorIdUser,errorUserAlreadyExists,errorUserNotFound,errorValidationUser} from '../errors/errors-users';

const prisma = new PrismaClient();

//Funcion para obetener todos los usuarios
export const getUsers= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const users = await prisma.user.findMany();
        res.send(users);
    } catch (error) {
        next(error)
    }
}

//Funcion para obtener un usuario por id
export const getUserById= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const id=parseInt(req.params.id);

        if (isNaN(id)){
            throw new errorIdUser('El ID debe ser un número');
        }

        const user= await prisma.user.findFirst({
            where:{
                id:id
            }
        })

        if(!user){
            throw new errorUserNotFound('Usuario no encontrado');
        }
        
        res.send(user);
    } catch (error) {
        next(error)
    }
}

//Funcion para agregar un usuario
export const addUser= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{


    try {
        //Validamos con zod que todos los campos sean correctos
        const {data,success,error}=userSchema.safeParse(req.body);
        if(!success){
            const errors:string[] = error.issues.map(err=> err.message);
            throw new errorValidationUser('Error de validación: ' + errors.join(', '));
        }

        const userData = data;

        // Validar si el usuario ya existe por dni
        const existingUser = await prisma.user.findUnique({
            where: { 
                dni: userData.dni 
            }
        });
        if (existingUser) {
            throw new errorUserAlreadyExists('El usuario con este dni ya existe');
        }

        await prisma.user.create({
            data: {
              email: userData.email,
              name: userData.name,
              lastName: userData.lastName,
              dni: userData.dni,
              age: userData.age,
              number: userData.number,
              address: userData.address,
              state:"activo" //Apenas se inscriba un usuario su estado va a ser activo
            }
        });

        res.status(201).send({message: 'Usuario creado con exito!'});
    } catch (error) {
        next(error)
    }
}

//Funcion para eliminar un usuario
export const deleteUser= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const id=parseInt(req.params.id);

        if (isNaN(id)){
            throw new errorIdUser('El ID debe ser un número');
        }

        await prisma.user.delete({
            where:{
                id:id
            }
        })

        res.status(200).send({message: 'Usuario eliminado con exito!'});
    } catch (error) {
        next(error)
        
    }
}