//Clase padre de errores de usuario
class errorUser extends Error {
    status:number;
    constructor(message:string,status:number){
        super(message);
        this.status = status;
        this.name = 'errorUser';
    }   
}
//Extendemos los errores personalizados

//Error en caso de que el ID no sea un número:
export class errorIdUser extends errorUser {
    constructor(message:string){
        super(message,400);
        this.name = 'errorIdUser';
    }
}
//Error en caso de que el usuario no exista:
export class errorUserNotFound extends errorUser {
    constructor(message:string){
        super(message,404);
        this.name = 'errorUserNotFound';
    }
}
//Error en caso de que la validación con zod falle:
export class errorValidationUser extends errorUser {
    constructor(message:string){
        super(message,400);
        this.name = 'errorValidationUser';
    }
}