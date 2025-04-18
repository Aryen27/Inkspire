import express from 'express';
import connectionCred from '../db/connection.js';
import mysql from 'mysql2/promise';
import { protect } from '../middleware/protectRoutes.js';

const router = express.Router();

const connection = connectionCred;

router.get('/:id', protect, async (req, res) => {
  const uid = req.params.id;

  try {
    const [userRes, userFields] = await connection.query('SELECT * FROM users WHERE uid=?',[uid]);
    const [blogRes, blogFields] = await connection.query('SELECT * FROM blogs WHERE authorid=?',[uid]);
    
    if (userRes.length == 0)
      return res.status(404).json({ sucess: false, message: 'User not found' });
    
    return res.status(200).json({sucess:true, userData: userRes[0], blogData: blogRes});
  } catch (err) {
    console.error('Error getting user details:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

})

router.patch('/:id', protect, async (req, res) => {
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

// Add route to reset passwords via email
router.get('/resetpw', async (req, res) => {
  /*
  1. Verify email id
  2. Create email template
  3. Send pw reset link to email
  */
})

router.post('/resetpw/:token', async (req, res) => {
  /*
  1. Verify pw reset token
  2. Check if pws match
  3. Hash new pw
  4. Update pw in DB
  */
})

export default router;