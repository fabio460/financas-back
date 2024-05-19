import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'

export const listarMes = async(req:Request, res:Response)=>{
    const id = req.params.id
    const m = await prisma.mes.findMany({
        include:{
            contas_A_Pagar:true,
            ganhos:true
        },
        where:{
            usuario:{
                id
            }
        }
    });
    res.json(m)
}


export const adicionarMes = async(req:Request, res:Response)=>{
    try {
       const {idDoUsuario, mesReferente, Ano} = req.body
       await prisma.mes.create({
        data:{
            idDoUsuario,
            mesReferente,
            sobra:0,
            Ano
        }
       })
       res.json("Mes criado com sucesso!")
    } catch (error) {
       res.json({falha:"Mes não criado", motivo:error})
    }
}

export const deletarMes = async(req:Request, res:Response)=>{
    try {
       const {id} = req.body
       await prisma.mes.delete({
        where:{id}
       })
       res.json("Mes deletado com sucesso!")
    } catch (error) {
       res.json({falha:"Mes não deletado", motivo:error})
    }
}

export const atualizarMes = async(req:Request, res:Response)=>{
    try {
       const {id, idDoUsuario, mesReferente, Ano} = req.body
       await prisma.mes.update({
        where:{id},
        data:{
            idDoUsuario,
            mesReferente,
            sobra:0,
            Ano
        }
       })
       res.json("Mes atualizado com sucesso!")
    } catch (error) {
       res.json({falha:"Mes não atualizado", motivo:error})
    }
}