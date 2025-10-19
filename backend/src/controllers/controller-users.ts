import {Request,Response,NextFunction} from 'express';
import {PrismaClient,Prisma} from '@prisma/client';
import {userSchema} from '../schemas/schemas-users';
import {errorIdUser,errorUserAlreadyExists,errorUserNotFound,errorValidationUser} from '../errors/errors-users';

const prisma = new PrismaClient();

//Funcion para obetener todos los usuarios
export const getUsers= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const users = await prisma.user.findMany();
        res.status(200).send(users);

    } catch (error) {
        next(error)
    }
}

//Funcion para obtener todos los usuarios u obtener filtrado por nombre y/o apellido
export const getUserByName= async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        //Busqueda flexible de usuario por nombre y/o apellido, o al reves.
        const fullName = (req.query.fullName as string) || "";
        const words = fullName.split(" ").filter(Boolean);//Almacenamos nombre y apellido como array

        //Buscamos el nombre tanto en la lista de nombres como en la de apellidos, de la misma forma con el apellido
        const conditions= words.map(word=>({
            OR:[
                {name:{contains:word}},
                {lastName:{contains:word}}
            ]
        }))
        
        //Almacenamos el codigo de busqueda completo con el AND 
        let whereClause;
        if (conditions.length > 0) {
            whereClause = { AND: conditions };
        } else {
            whereClause = {};
        }

        //Realizamos la busqueda correspondiente
        const users = await prisma.user.findMany({
            where: whereClause
        });

        if(!users.length){
            throw new errorUserNotFound('Usuario no encontrado');
        }
        res.status(200).send(users);

    } catch (error) {
        next(error)
    }
}

//Funcion para crear un usuario
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
        res.status(200).send({message:'Usuario editado con exito!'})

    } catch (error:any) {

        if (error.code === 'P2002') {
            const field = (error.meta?.target as string);
            throw new errorUserAlreadyExists(`Ya existe un usuario con el mismo ${field.replace("User_", "").replace("_key", "")}`);
        }
        next(error);

    }
}