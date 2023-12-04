import { Router } from "express";
import { listarUsuarios } from "../Controllers/usuarioController";

const usuarioRouter = Router();
usuarioRouter.get("/listarUsuario",listarUsuarios)
export default usuarioRouter