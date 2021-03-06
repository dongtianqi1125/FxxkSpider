import * as Koa from "koa";
import * as serve from "koa-static";
import ms = require("ms");
import "reflect-metadata";
import { useKoaServer } from "routing-controllers";
import Environment from "./config";
import TaskController from "./controllers/task";

const createHttpServer = async () => {
    const koa = new Koa();

    // 前端静态资源服务
    koa.use(serve(__dirname + "/../page/dist", {
        maxAge: Environment.NAME === "production" ? ms("20d") : 0,
    }));

    // 数据报表资源服务
    koa.use(serve(__dirname + "/../core/export"));

    useKoaServer(koa, {
        routePrefix: "/api",
        controllers: [
            TaskController,
        ],
        classTransformer: false,
    });

    return koa;
};

export default createHttpServer;
