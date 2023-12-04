import { Router } from "express";
import { logarUsuarios, criarUsuarios, listarUsuarios, autenticarUsuarios } from "../Controllers/usuarioController";

const usuarioRouter = Router();
usuarioRouter.get("/listarUsuario",listarUsuarios)
usuarioRouter.post("/criarUsuario", criarUsuarios)
usuarioRouter.post("/logarUsuario", logarUsuarios)
usuarioRouter.get("/autenticaUsuario", autenticarUsuarios)
export default usuarioRouter