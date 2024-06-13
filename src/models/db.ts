import { Pool } from 'pg';

const sql = new Pool({
   host: 'localhost',
   database: 'library',
   port: 5432,
   user: 'postgres',
   password: process.env.PGPASS
});

export default sql;

