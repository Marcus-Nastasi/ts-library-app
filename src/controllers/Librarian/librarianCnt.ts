import sql from '../../models/db';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

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
      const response: any = await sql.query('SELECT * FROM librarians WHERE (id=$1);', [ req.params.id ]);
      const password: string = await response.rows[0].password;
      const valid: Promise<boolean> = bcrypt.compare(req.body.password, password);
      valid ? res.status(202).json({ data: { status: 'valid' } }).end() : res.status(401).json({ data: { status: 'not valid' } }).end();
   } catch(e) {
      console.log(e);
   }
};

export const insert = async (req: Request, res: Response) => {
   try {
      const id = randomUUID();
      const { name, cpf, password } = req.body;
      const salt: string = await bcrypt.genSalt(10);
      const encoded: string = await bcrypt.hash(password, salt);

      const response = await sql.query(
         'INSERT INTO librarians (id, name, cpf, password) VALUES ($1, $2, $3, $4);', [ id, name, cpf, encoded ]
      );

      res.status(201).json({ data: { status: 'created' } }).end();
   } catch(e) {
      console.log(e);
   }
};

export const update = async (req: Request, res: Response) => {
   try {
      const { name, cpf } = req.body; 
      await sql.query('UPDATE librarians SET name=$1, cpf=$2 WHERE(id=$3)', [ name, cpf, req.params.id ]);
      return res.status(202).json({ data: { status: 'updated' } }).end();
   } catch(e) {
      console.log(e);
   }
};

export const del = async (req: Request, res: Response) => {
   try {
      await sql.query('DELETE FROM librarians WHERE (id=$1)', [ req.params.id ]);
      return res.status(202).json({ data: { status: 'deleted' } }).end();
   } catch(e) {
      console.log(e);
   }
};



