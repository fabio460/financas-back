import express  from 'express'
const app = express()

import { routerAll } from "./Routes";
import { listarUsuarios } from './Controllers/usuarioController';

routerAll.forEach((e)=>{
    return app.use(e.endpoint,e.router)
})
app.get("/usuario", listarUsuarios)
app.listen("4000",()=> console.log("rodando na porta 4000"))