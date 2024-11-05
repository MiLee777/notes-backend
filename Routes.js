const { Router } = require('express');
const router = Router();
const { getNote, addNotes, deleteNote, updateNote } = require('./Controller');

router.get('/', getNote);
router.post('/addNotes', addNotes);
router.delete('/deleteNote/:id', deleteNote);
router.put('/updateNote', updateNote);

module.exports = router;