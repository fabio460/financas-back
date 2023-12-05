import { Router } from "express"
import { adicionarContas_A_Pagars, atualizarContas_A_Pagar, deletarContas_A_Pagars, listarContas_A_Pagars } from "../Controllers/contas_a_pagarController"

const contas_a_pagarRouter = Router()

contas_a_pagarRouter.get("/contas_a_pagar", listarContas_A_Pagars)
contas_a_pagarRouter.post("/adicionarcontas_a_pagar", adicionarContas_A_Pagars)
contas_a_pagarRouter.delete("/deletarcontas_a_pagar", deletarContas_A_Pagars)
contas_a_pagarRouter.put("/atualizarcontas_a_pagar", atualizarContas_A_Pagar)

export default contas_a_pagarRouter;