import { routerType } from "../type";
import usuarioRouter from "./usuarioRoutes";

export const routerAll:routerType[] = [
    {endpoint:"/usuario", router:usuarioRouter}
]