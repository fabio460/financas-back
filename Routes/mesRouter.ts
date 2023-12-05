import { Router } from "express";
import { adicionarMes, atualizarMes, deletarMes, listarMes } from "../Controllers/mesController";

const mesRouter = Router()
mesRouter.get("/listarMes", listarMes)
mesRouter.post("/adicionarMes", adicionarMes)
mesRouter.delete("/deletarMes", deletarMes)
mesRouter.put("/atualizarMes", atualizarMes)

export default mesRouter;