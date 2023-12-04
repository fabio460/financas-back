import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'
export const listarUsuarios = async(req:Request, res:Response)=>{
   const r =await prisma.usuario.findMany();
   res.json(r);
}