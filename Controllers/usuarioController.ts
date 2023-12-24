import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

const privateKey = "chaveprivada"

export const listarUsuarios = async(req:Request, res:Response)=>{
   const r =await prisma.usuario.findMany();
   res.json(r);
}

export const listarUsuariosPorId = async(req:Request, res:Response)=>{
   const id = req.params.id
   const r =await prisma.usuario.findUnique({
      where:{
         id
      },
      include:{
         mes:{
            include:{
               contas:true
            }
         }
      }
   });
   res.json(r);
}

export const logarUsuarios = async(req:Request, res:Response)=>{
   const {email, senha} = req.body
   try {
      const r =await prisma.usuario.findUnique({
         select:{
            id:true,
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
         const token = jwt.sign({usuario:r},privateKey,{expiresIn:''})
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
         res.status(200).json({cond:"autenticado", usuario:jwt.decode(token)})
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
      res.json("usuário criado com sucesso!")
   } catch (error) {
      res.json({falha:"não criado", motivo:error})
   }
}

export const deletarUsuarios = async(req:Request, res:Response)=>{
   try {
      const {id} = req.body
      await prisma.usuario.delete({
         where:{
           id
         }
      })
      res.json("usuário deletado com sucesso!")
   } catch (error) {
      res.status(500).json({falha:"não deletado", motivo:error})
   }
}

export const atualizarUsuarios = async(req:Request, res:Response)=>{
   try {
      const {email, nome, senha, id} = req.body
      await prisma.usuario.update({
         data:{
            email,
            nome,
            senha
         },
         where:{
            id
         }
      })
      res.json("usuário atualizado com sucesso!")
   } catch (error) {
      res.json({falha:"usuário não atualizado", motivo:error})
   }
}