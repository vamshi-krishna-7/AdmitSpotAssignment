const db = require('../config/db');

const addContact = async (req, res) => {
  const { name, email, phone, address, timezone } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO contacts (name, email, phone, address, timezone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, address, timezone]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error adding contact' });
  }
};

// Additional functions like getContacts, updateContact, deleteContact can follow a similar structure
module.exports = { addContact };
