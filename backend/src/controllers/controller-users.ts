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

        // Validar si el usuario ya existe por dni
        const existingUserId = await prisma.user.findUnique({
            where: { 
                dni: data.dni 
            }
        });
        if (existingUserId) {
            throw new errorUserAlreadyExists('El usuario con este dni ya existe');
        }

        // Validar si el usuario ya existe por gmail
        const existingUserEmail = await prisma.user.findUnique({
            where: { 
                email: data.email 
            }
        });
        if (existingUserEmail) {
            throw new errorUserAlreadyExists('El usuario con este email ya existe');
        }

        await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                lastName: data.lastName,
                dni: data.dni,
                age: data.age,
                number: data.number,
                address: data.address,
                state:"activo" //Apenas se inscriba un usuario su estado va a ser activo
            }
        });
        res.status(200).send({message: 'Usuario creado con exito!'});

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

//Funcion para editar un usuario
export const updateUser= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const id = parseInt(req.params.id)

        if(isNaN(id)){
            throw new errorIdUser('El ID debe ser un número');
        }

        //Validamos con zod que todos los campos esten presentes y correctos
        const {data,success,error}=userSchema.safeParse(req.body);

        if(!success){
            const errors:string[] = error.issues.map(err=> err.message);
            throw new errorValidationUser('Error de validación: ' + errors.join(', '));
        }

        await prisma.user.update({
            where:{
                id:id
            },
            data:data
        })
        res.status(200).send({message: 'Usuario editado con exito!'});

    } catch (error:any) {
        if (error.code === 'P2002') {
            const field = (error.meta?.target as string);
            throw new errorUserAlreadyExists(`Ya existe un usuario con el mismo ${field.replace("User_", "").replace("_key", "")}`);
        }
        next(error);
    }
}