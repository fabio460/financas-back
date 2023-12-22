import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'

export const listarContas = async(req:Request, res:Response)=>{
    const m = await prisma.contas.findMany({
       
    });
    res.json(m)
}



export const adicionarContas = async(req:Request, res:Response)=>{
    const {nome, valor, idMes, tipo} = req.body
    try {
       await prisma.contas.create({
        data:{
            nome,
            valor,
            idMes,
            selecionado:true,
            tipo
        }
       })
       res.json("contas criado com sucesso!")
    } catch (error) {
       res.json({falha:"contas não criado", motivo:error})
    }
}

export const deletarContas = async(req:Request, res:Response)=>{
    try {
       const {id} = req.body
       await prisma.contas.delete({
        where:{id}
       })
       res.json("contas deletado com sucesso!")
    } catch (error) {
       res.json({falha:"contas não deletado", motivo:error})
    }
}

export const atualizarcontas = async(req:Request, res:Response)=>{
    try {
       const {id, nome, valor, tipo, selecionado} = req.body
       await prisma.contas.update({
        where:{id},
        data:{
            nome,
            valor,
            tipo,
            selecionado
        }
       })
       res.json("contas atualizado com sucesso!")
    } catch (error) {
       res.json({falha:"contas não atualizado", motivo:error})
    }
}