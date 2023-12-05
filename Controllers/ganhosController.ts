import { prisma } from "../prisma/prismaClient"
import {Request, Response} from 'express'

export const listarGanhos = async(req:Request, res:Response)=>{
    const m = await prisma.ganhos.findMany({
       
    });
    res.json(m)
}

export const adicionarGanhos = async(req:Request, res:Response)=>{
    const {nome, valor, idMes} = req.body
    try {
       await prisma.ganhos.create({
        data:{
            nome,
            valor,
            idMes
        }
       })
       res.json("Ganho criado com sucesso!")
    } catch (error) {
       res.json({falha:"Ganho não criado", motivo:error})
    }
}

export const deletarGanhos = async(req:Request, res:Response)=>{
    try {
       const {id} = req.body
       await prisma.ganhos.delete({
        where:{id}
       })
       res.json("Ganho deletado com sucesso!")
    } catch (error) {
       res.json({falha:"Ganho não deletado", motivo:error})
    }
}

export const atualizarGanho = async(req:Request, res:Response)=>{
    try {
       const {idMes, nome, valor} = req.body
       await prisma.ganhos.updateMany({
        where:{idMes},
        data:{
            nome,
            valor,
        }
       })
       res.json("Ganho atualizado com sucesso!")
    } catch (error) {
       res.json({falha:"Ganho não atualizado", motivo:error})
    }
}