import { routerType } from "../type";
import contas_a_pagarRouter from "./contas_a_pagarRouter";
import ganhosRouter from "./ganhosRouter";
import mesRouter from "./mesRouter";
import usuarioRouter from "./usuarioRoutes";

export const routerAll:routerType[] = [
    {endpoint:"/usuario", router:usuarioRouter},
    {endpoint:"/mes", router:mesRouter},
    {endpoint:"/ganhos", router:ganhosRouter},
    {endpoint:"/contasapagar",router:contas_a_pagarRouter}
]