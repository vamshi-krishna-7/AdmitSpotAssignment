const express = require('express');
const { addContact, getContacts, updateContact, deleteContact, batchAddContacts } = require('../controllers/contactController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addContact);
router.get('/', authMiddleware, getContacts);
router.put('/:id', authMiddleware, updateContact);
router.delete('/:id', authMiddleware, deleteContact);
router.post('/batch', authMiddleware, batchAddContacts);

module.exports = router;
