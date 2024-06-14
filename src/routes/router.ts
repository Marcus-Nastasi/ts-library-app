import express from 'express';
import { wellcome } from '../controllers/indexCnt';
import { getAll, getSingle, validPass, insert, del, update } from '../controllers/Librarian/librarianCnt';

export const router = express.Router();

// home
router.get('/', wellcome);

// librarians
router.get('/api/librarians', getAll);
router.get('/api/librarians/:id', getSingle);
router.post('/api/librarians/add/', insert);
router.put('/api/librarians/update/:id/', update);
router.delete('/api/librarians/delete/:id/', del);

// to-do: members

