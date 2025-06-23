import { Request, Response } from "express";
import { Foo } from "../types/foo.types";
import * as service from "../services/foo.service";
// import logger from "../config/logger"; Used for logging, but not implemented in this snippet

export const listFoos = (_req: Request, response: Response) => {
	const payload: Foo = service.listFoos();
	response.status(200).send({ payload });
};

export const getFoo = (req: Request, response: Response) => {
	const { id } = req.params;
	const payload: Foo = service.getFoo(id);
	response.status(200).send({ payload });
};

export const addFoo = (req: Request, response: Response) => {
	const { name, description } = req.body;
	const payload: Foo = service.addFoo({ name, description });
	response.status(201).send({ payload });
};
