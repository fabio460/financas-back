import { Router } from "express";
import { logarUsuarios, criarUsuarios, listarUsuarios, autenticarUsuarios, deletarUsuarios, atualizarUsuarios } from "../Controllers/usuarioController";

const usuarioRouter = Router();
usuarioRouter.get("/listarUsuario",listarUsuarios)
usuarioRouter.post("/criarUsuario", criarUsuarios)
usuarioRouter.post("/logarUsuario", logarUsuarios)
usuarioRouter.get("/autenticaUsuario", autenticarUsuarios)
usuarioRouter.delete("/deletarUsuario", deletarUsuarios)
usuarioRouter.put("atualizarUsuario", atualizarUsuarios)
export default usuarioRouter