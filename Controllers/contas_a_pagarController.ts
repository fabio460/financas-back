import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'

export const listarContas_A_Pagars = async(req:Request, res:Response)=>{
    const m = await prisma.contas_A_Pagar.findMany({
       
    });
    res.json(m)
}

export const adicionarContas_A_Pagars = async(req:Request, res:Response)=>{
    const {nome, valor, idMes} = req.body
    try {
       await prisma.contas_A_Pagar.create({
        data:{
            nome,
            valor,
            idMes
        }
       })
       res.json("Contas_A_Pagar criado com sucesso!")
    } catch (error) {
       res.json({falha:"Contas_A_Pagar não criado", motivo:error})
    }
}

export const deletarContas_A_Pagars = async(req:Request, res:Response)=>{
    try {
       const {id} = req.body
       await prisma.contas_A_Pagar.delete({
        where:{id}
       })
       res.json("Contas_A_Pagar deletado com sucesso!")
    } catch (error) {
       res.json({falha:"Contas_A_Pagar não deletado", motivo:error})
    }
}

export const atualizarContas_A_Pagar = async(req:Request, res:Response)=>{
    try {
       const {idMes, nome, valor} = req.body
       await prisma.contas_A_Pagar.updateMany({
        where:{idMes},
        data:{
            nome,
            valor,
        }
       })
       res.json("Contas_A_Pagar atualizado com sucesso!")
    } catch (error) {
       res.json({falha:"Contas_A_Pagar não atualizado", motivo:error})
    }
}