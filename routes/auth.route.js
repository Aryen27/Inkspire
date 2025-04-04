import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt'

// DB Connection
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'D4_89760_Aryan',
  password: 'manager',
  database: 'club_elite',
});

const router = express.Router();

// Encrypting password
const saltRounds = 10;



router.get('/login', (req, res) => {
// Render login page
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `users` WHERE `email`= ? ', [email]
    );
    console.log(results);

    // Check if user exists
    if (results.length == 0)
      return res.status(404).json({ success: false, message: 'User not found' });

    const name = results[0].name;
    const storedPassword = results[0].password;
    bcrypt.compare(password, storedPassword, (err, results) => {
      if (err)
        throw err;
      if (results) {
        res.status(200).json({ success: true, message: `Welcome ${name}!`, data: results });
      }
      else {
        res.status(401).json({ success: false, message: 'Password is incorrect' });
      }
    })
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err });
  }
});

router.get('/signup', (req, res) => {
  // Render signup form
});

router.post('/signup', async (req, res) => {
  const { name, email } = req.body;
  let { password } = req.body;
  const [results,fields] = await connection.query('SELECT * FROM `users` WHERE `email`= ?', [email]);
  if (results.length != 0)
    return res.status(409).json({success: false, message: 'An account is already associated with this email. Please login or use another email.'})

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try { 
    const results = await connection.query('INSERT INTO `users`(name, email, password) values(?,?,?)', [name, email, hashedPassword]);
    res.status(200).json({ success: true, message: "You have successfuly created an account" });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

export default router;