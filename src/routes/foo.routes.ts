import express from "express";
import * as controller from "../controllers/foo.controller";

const fooRoutes = express.Router();
fooRoutes.get("/foo", controller.listFoos);
fooRoutes.get("/foo/:id", controller.getFoo);
fooRoutes.post("/foo", controller.addFoo);

export default fooRoutes;
