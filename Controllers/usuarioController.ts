import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

const privateKey = "chaveprivada"

export const listarUsuarios = async(req:Request, res:Response)=>{
   const r =await prisma.usuario.findMany();
   res.json(r);
}

export const logarUsuarios = async(req:Request, res:Response)=>{
   const {email, senha} = req.body
   try {
      const r =await prisma.usuario.findUnique({
         select:{
            email:true,
            nome:true
         },
         where:{
            email,
            senha
         }
      });
      if (!r) {
         res.status(401).json("Usuario não autenticado!")
      }else{
         const token = jwt.sign({usuario:r.nome},privateKey,{expiresIn:60})
         res.json({usuario:r,token});
      }
      
   } catch (error) {
      res.json({falha:"falha na autenticação", motivo:error})
   }
}

export const autenticarUsuarios = async(req:Request, res:Response)=>{
   try {
      const token:any = req.headers["x-access-token"]
      if (jwt.verify(token, privateKey)) {
         res.status(200).json("autenticado")
      }else{
         res.json("não")
      }
      
   } catch (error) {
      res.status(401).json("não atenticado")
   }
    
}

export const criarUsuarios = async(req:Request, res:Response)=>{
   try {
      const {email, nome, senha} = req.body
      await prisma.usuario.create({
         data:{
            email,
            nome,
            senha
         }
      })
      res.send("usuário criado com sucesso!")
   } catch (error) {
      res.json({falha:"não criado", motivo:error})
   }
}