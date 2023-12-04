import express  from 'express'
const app = express()
import cors from "cors";
import { routerAll } from "./Routes";
import { listarUsuarios } from './Controllers/usuarioController';
app.use(express.json())
app.use(cors())
routerAll.forEach((e)=>{
    return app.use(e.endpoint,e.router)
})
app.get("/usuario", listarUsuarios)
app.listen("4000",()=> console.log("rodando na porta 4000"))