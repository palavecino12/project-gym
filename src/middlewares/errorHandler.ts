import { Request,Response,NextFunction } from "express";

export const errorHandler=(err:any,req:Request,res:Response,next:NextFunction)=>{
    const status=err.status || 500;
    const message=err.message || 'Error interno del servidor';
    res.status(status).json({
        error:true,
        message
    })
}