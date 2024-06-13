import sql from '../../models/db';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

export const getAll = async (req: Request, res: Response) => {
   try {
      const response = await sql.query('SELECT * FROM librarians;');
      res.status(200).json({ data: response.rows }).end();
   } catch(e) {
      console.log(e);
   }
};

export const getSingle = async (req: Request, res: Response) => {
   try {
      const response = await sql.query('SELECT * FROM librarians WHERE (id=$1);', [ req.params.id ]);
      res.status(200).json({ data: response.rows }).end();
   } catch(e) {
      console.log(e);
   }
};

export const validPass = async (req: Request, res: Response) => {
   try {
      const response = await sql.query('SELECT * FROM librarians WHERE (id=$1);', [ req.params.id ]);
      const password = await response.rows[0].password;
      const valid: Promise<boolean> = bcrypt.compare(req.body.password, password);
      valid ? res.status(202).json({ data: { status: 'valid' } }).end() : res.status(401).json({ data: { status: 'not valid' } }).end();
   } catch(e) {
      console.log(e);
   }
};



