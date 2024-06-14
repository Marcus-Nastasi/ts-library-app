import express from 'express';
import { wellcome } from '../controllers/indexCnt';
import { getAll, getSingle, validPass, insert, del } from '../controllers/Librarian/librarianCnt';

export const router = express.Router();

// home
router.get('/', wellcome);

// librarians
router.get('/api/librarians', getAll);
router.get('/api/librarians/:id', getSingle);
router.post('/api/librarians/valid/:id/', validPass);
router.post('/api/librarians/add/', insert);
router.delete('/api/librarians/delete/:id/', del);


