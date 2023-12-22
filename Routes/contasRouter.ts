import { Router } from "express";
import { adicionarContas, atualizarcontas, deletarContas, listarContas } from "../Controllers/contasController";

const contasRouter = Router()

contasRouter.get("/contas", listarContas)
contasRouter.post("/adicionarcontas", adicionarContas)
contasRouter.delete("/deletarcontas", deletarContas)
contasRouter.put("/atualizarcontas", atualizarcontas)

export default contasRouter;