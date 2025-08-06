"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorValidationUser = exports.errorUserNotFound = exports.errorIdUser = void 0;
//Clase padre de errores de usuario
class errorUser extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = 'errorUser';
    }
}
//Extendemos los errores personalizados
//Error en caso de que el ID no sea un número:
class errorIdUser extends errorUser {
    constructor(message) {
        super(message, 400);
        this.name = 'errorIdUser';
    }
}
exports.errorIdUser = errorIdUser;
//Error en caso de que el usuario no exista:
class errorUserNotFound extends errorUser {
    constructor(message) {
        super(message, 404);
        this.name = 'errorUserNotFound';
    }
}
exports.errorUserNotFound = errorUserNotFound;
//Error en caso de que la validación con zod falle:
class errorValidationUser extends errorUser {
    constructor(message) {
        super(message, 400);
        this.name = 'errorValidationUser';
    }
}
exports.errorValidationUser = errorValidationUser;
