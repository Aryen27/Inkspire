import express from 'express';
import mysql from 'mysql2/promise';

// DB Connection
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'D4_89760_Aryan',
  password: 'manager',
  database: 'club_elite',
});

const router = express.Router();


router.get('/login', (req, res) => {
// Render login page
});

router.post('/login', async (req, res) => {

});

router.get('/signup', (req, res) => {
  // Render signup form
});

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  console.log(email, password);
  res.status(200).json({ success: true, message: "You have successfuly created an account" });
});

export default router;