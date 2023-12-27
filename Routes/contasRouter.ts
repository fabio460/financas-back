import { Router } from "express";
import { adicionarContas, atualizarcontas, deletarContas, inverterContaSelecionada, listarContas, selecionadarTudo } from "../Controllers/contasController";

const contasRouter = Router()

contasRouter.get("/contas", listarContas)
contasRouter.post("/adicionarcontas", adicionarContas)
contasRouter.delete("/deletarcontas", deletarContas)
contasRouter.put("/atualizarcontas", atualizarcontas)
contasRouter.put("/inverterContaSelecionada",inverterContaSelecionada)
contasRouter.put("/selecionartudo", selecionadarTudo)
export default contasRouter;