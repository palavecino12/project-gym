"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
//Schema de validaciones para el usuario
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
    dni: zod_1.z.number().int().min(6),
    edad: zod_1.z.number().int().positive(),
    number: zod_1.z.string().min(1),
    direccion: zod_1.z.string().min(1),
    estado: zod_1.z.string()
});
