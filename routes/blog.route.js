import express from 'express';
import mysql from 'mysql2/promise';


const router = express.Router();

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'D4_89760_Aryan',
  password: 'manager',
  database: 'club_elite',
});

router.get('/', (req, res) => {
  /*
  1. Get all the blogs from database
  2. Sort the blogs by newest first
  3. Display blogs in a grid of 4 for lg-vp & 1 form sm-vp & 2 for md-vp
  */
  res.status(200).json({ data: 'Hello' });
})


router.get('/:id', (req, res) => {
  /*
  1. Get the id from request params
  2. Get the blog from the given id from db
  3. Check if user is logged in
  4. Show author if logged in and vice versa
  */
})


router.post('/', (req, res) => {
  /*
  1. Check if user has logged in.
  2. Add blog post to database.
  */
})



export default router;