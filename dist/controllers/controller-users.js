"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.addUser = exports.getUserById = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const schemas_users_1 = require("../schemas/schemas-users");
const errors_users_1 = require("../errors/errors-users");
const prisma = new client_1.PrismaClient();
//Funcion para obetener todos los usuarios
const getUsers = async (req, res, next) => {
    try {
        const users = await prisma.user.findMany();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
};
exports.getUsers = getUsers;
//Funcion para obtener un usuario por id
const getUserById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            throw new errors_users_1.errorIdUser('El ID debe ser un número');
        }
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        });
        if (!user) {
            throw new errors_users_1.errorUserNotFound('Usuario no encontrado');
        }
        res.send(user);
    }
    catch (error) {
        next(error);
    }
};
exports.getUserById = getUserById;
//Funcion para agregar un usuario
const addUser = async (req, res, next) => {
    try {
        //Validamos con zod que todos los campos sean correctos
        const { data, success, error } = schemas_users_1.userSchema.safeParse(req.body);
        if (!success) {
            const errors = error.issues.map(err => err.message);
            throw new errors_users_1.errorValidationUser('Error de validación: ' + errors.join(', '));
        }
        const userData = data;
        await prisma.user.create({
            data: {
                email: userData.email,
                name: userData.name,
                lastName: userData.lastName,
                dni: userData.dni,
                edad: userData.edad,
                number: userData.number,
                direccion: userData.direccion,
                estado: userData.estado
            }
        });
        res.status(201).send({ message: 'Usuario creado con exito!' });
    }
    catch (error) {
        next(error);
    }
};
exports.addUser = addUser;
//Funcion para eliminar un usuario
const deleteUser = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            throw new errors_users_1.errorIdUser('El ID debe ser un número');
        }
        await prisma.user.delete({
            where: {
                id: id
            }
        });
        res.status(200).send({ message: 'Usuario eliminado con exito!' });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUser = deleteUser;
