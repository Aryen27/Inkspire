import express from 'express';
import connectionCred from '../db/connection.js';
import mysql from 'mysql2/promise';

const router = express.Router();

const connection = connectionCred;

router.get('/', async (req, res) => {
  
})

router.patch('/:id', async (req, res) => {
  const { name, email } = req.body;
  const uid = req.params.id;

  try {
    const [results, fields] = await connection.query('UPDATE users SET name=?, email=? WHERE uid=?', [name, email, uid]);
    
    if (results.affectedRows == 0)
      return res.status(404).json({ message: 'User not found' })
    
    return res.status(200).json({ sucess: true, message: 'User details have been updated successfully' });
  } catch (err) {
    console.error('Error updating user details:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
})



export default router;