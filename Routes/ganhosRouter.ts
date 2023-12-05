import { Router } from "express";
import { adicionarGanhos, atualizarGanho, deletarGanhos, listarGanhos } from "../Controllers/ganhosController";

const ganhosRouter = Router()

ganhosRouter.get("/ganhos", listarGanhos)
ganhosRouter.post("/adicionarGanhos", adicionarGanhos)
ganhosRouter.delete("/deletarGanhos", deletarGanhos)
ganhosRouter.put("/atualizarGanhos", atualizarGanho)

export default ganhosRouter;