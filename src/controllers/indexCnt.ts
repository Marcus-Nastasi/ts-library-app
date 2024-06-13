import { Request, Response } from "express";

export const wellcome = (req: Request, res: Response) => res.status(200).json({ data: { status: 'ok' } }).end();


